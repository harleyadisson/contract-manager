import { Contract } from '../domain/contract';
import { parseContract } from '../domain/object.parser';
import Database from '../infraestructure/database/database-connection';

const getContractRepository = (id: string) => {
    return new Promise<Contract>((resolve, reject) => {
        Database.getInstance().getConnection().getRepository(Contract).findOneOrFail({ relations: ["provider", "term"] })
            .then(contract => {
                resolve(contract)
            }).catch(err => reject(err))
    });
}

const getAllContractsRepository = () => {
    return new Promise<Array<Contract>>((resolve, reject) => {
        Database.getInstance().getConnection().getRepository(Contract).find({ relations: ["provider", "term"] })
            .then(allContracts => {
                resolve(allContracts)
            }).catch(err => reject(err))
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
            console.log(error)   
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

            let contractRetrieved = await getContractRepository(contract.id)

            contractRetrieved.name = contract.name
            contractRetrieved.serviceDescription = contractRetrieved.serviceDescription

            Database.getInstance().getConnection().getRepository(Contract).save(contractRetrieved)
                .then(data => {
                    resolve(contract.id)
                })
                .catch(error => {
                    reject(`Já existe um prestador de serviço cadastrado no Documento`)
                }
                )

        } catch (error) {
            reject(`Já existe um prestador de serviço cadastrado no Documento: ${contract.id}`)
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