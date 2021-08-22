import { Contract } from '../domain/contract';
import { parseContract } from '../domain/object.parser';
import Database from '../infraestructure/database/database-connection';

const getContractRepository = (id: string) => {
    return new Promise<Contract>((resolve, reject) => {
        Database.getInstance().getConnection().getRepository(Contract).findOneOrFail({ "id": id })
            .then(contract => {
                resolve(contract)
            }).catch(err => reject(err))
    });
}

const getAllContractsRepository = () => {
    return new Promise<Array<Contract>>((resolve, reject) => {
        try {
            Database.getInstance().getConnection().getRepository(Contract).find()
                .then(allContracts => {
                    resolve(allContracts)
                }).catch(err => {
                    reject(err)
                })

        } catch (error) {
            console.error(error)
        }

    });
}

const addContractRepository = (contract: Contract) => {
    return new Promise<string>((resolve, reject) => {
        try {
            Database.getInstance().getConnection().getRepository(Contract).save(parseContract(contract))
                .then(contract => {
                    resolve(contract.id.toString())
                }).catch(err => {
                    reject(err)
                })
        } catch (error) {
            console.error(error)
        }

    });
}

const deleteContractRepository = (id: string) => {
    return new Promise<string>((resolve, reject) => {
        Database.getInstance().getConnection().getRepository(Contract).delete({ "id": id })
            .then(data => {
                resolve(data.toString())
            }).catch(err => reject(err))
    });
}

const editContractRepository = (contract: Contract) => {
    return new Promise<string>(async (resolve, reject) => {
        try {
            Database.getInstance().getConnection().getRepository(Contract).save(parseContract(contract))
                .then((response) => {
                    console.log(response)
                    resolve(contract.id)
                })
                .catch(() => {
                    reject(`Já existe um prestador de serviço cadastrado no Documento`)
                })

        } catch (error) {
            console.error(error)
            reject(`Não existe este prestador de serviço no sistema: ${error.message}`)
        }
    });
}

export {
    getContractRepository,
    getAllContractsRepository,
    addContractRepository,
    deleteContractRepository,
    editContractRepository
}