import { Contract } from '../domain/contract';
import { contractList } from '../infraestructure/mock/contract.list';
import { getProviderRepository } from './provider.repository';
import uniqid from 'uniqid';
import { exception } from 'console';
import contract from '../controller/contract.controller';

const getContractRepository = (id: string) => {
    return new Promise<Contract>((resolve, reject) => {
    const result = contractList.find(fcontract => fcontract.id == id)
    if (result != null)
        resolve(result)
    reject('Contrato não encontrado')
    });
}

const getAllContractsRepository = () => {
    return new Promise<Array<Contract>>((resolve, reject) => {
        resolve (contractList)
    });
}

const addContractRepository = (contract: Contract) => {
    return new Promise<string>((resolve, reject) => {
        getProviderRepository(contract.providerDocument)
        .then(() => {
            contract.id = uniqid();
            contractList.push(contract)
            resolve(contract.id)
        })
        .catch(err => reject(err))
        
    });
}

const deleteContractRepository = (id: string) => {
    let contractPosition: number = 0;
    let position: number = -1;

    for(let contract of contractList) {
        if(id == contract.id) {
            position = contractPosition;
            break;
        }
        contractPosition += 1 
    }

    if(position != -1)
        contractList.splice(contractPosition, contractPosition + 1)
    else
        throw new exception
}

const editContractRepository = async (contract: Contract) => {
    let contractPosition: number = 0;
    let position: number = -1;

    for(let selectedContract of contractList) {
        if(selectedContract.id == contract.id) {
            position = contractPosition;
            break;
        }
        contractPosition += 1 
    }

    if (position != -1) {
        contractList.splice(contractPosition, contractPosition + 1)
        contractList.push(contract);
    } else {
        throw new exception
    }    
}

export {
    getContractRepository, 
    getAllContractsRepository, 
    addContractRepository, 
    deleteContractRepository,
    editContractRepository}