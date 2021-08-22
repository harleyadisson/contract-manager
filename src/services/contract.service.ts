import { Contract } from '../domain/contract';
import { 
    getContractRepository, 
    getAllContractsRepository, 
    addContractRepository, 
    deleteContractRepository, 
    editContractRepository } from '../repository/contract.repository';
    
    const getContract = (id: string) => {
        return new Promise<Contract>((resolve, reject) => {
            getContractRepository(id)
            .then(selectedContract => {
                resolve(selectedContract)
            })
            .catch(err => reject(err))
        });
    }

    const getAllContracts = () => {
        return new Promise<Array<Contract>>((resolve, reject) => {
            resolve(getAllContractsRepository())
        });
    }

    const addContract = (contract: Contract) => {
        return new Promise<string>((resolve, reject) => { 
            addContractRepository(contract)
            .then(id => {
                resolve(id)
            })
            .catch(err => reject(err))
        });
    }

    const deleteContract = (id: string) => {
        try {
            deleteContractRepository(id)
            .then(response => {

            }).catch(err => {
                throw new Error(err.message)
            })
        } catch (error) {
            throw new Error(error.message)
        }
    }

    const editContract = (contract: Contract) => {
        try {
            editContractRepository(contract)
        } catch (error) {
            throw new Error(error.message)
        }
    }

    export {getContract, getAllContracts, addContract, deleteContract, editContract}