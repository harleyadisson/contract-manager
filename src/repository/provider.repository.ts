import { Provider } from '../domain/provider'
import {providerList} from '../infraestructure/mock/provider.list'
import uniqid from 'uniqid';
import { exception } from 'console';

    const getProviderRepository = (document: string) => {
        return new Promise<Provider>((resolve, reject) => {
        const result = providerList.find(fprovider => fprovider.document == document)
        if (result != null)
            resolve(result)
        reject('Prestador de serviço não encontrado!')
        });
    }

    const getAllProvidersRepository = () => {
        return new Promise<Array<Provider>>((resolve, reject) => {
            if (providerList.length > 0)
                resolve (providerList)
            reject('Lista de providers vazia')
        });
    }

    const addProviderRepository = (provider: Provider) => {
        return new Promise<string>(async (resolve, reject) => {

            try {
                const hasProvider = await getProviderRepository(provider.document);
                reject(`Já existe um prestador de serviço cadastrado no Documento: ${hasProvider.document}`)
                
            } catch (error) { 
                provider.id = uniqid();
                providerList.push(provider)
                resolve(provider.id)
            }
           
        });
    }

    const deleteProviderRepository = (id: string) => {
        let providerPosition: number = 0;
        let position: number = -1;
    
        for(let provider of providerList) {
            if(id == provider.id) {
                position = providerPosition;
                break;
            }
            providerPosition += 1 
        }
    
        if(position != -1)
            providerList.splice(providerPosition, providerPosition + 1)
        else
            throw new exception
    }

    const editProviderRepository = async (contract: Provider) => {
        let contractPosition: number = 0;
        let position: number = -1;
    
        for(let selectedContract of providerList) {
            if(selectedContract.id == contract.id) {
                position = contractPosition;
                break;
            }
            contractPosition += 1 
        }
    
        if (position != -1) {
            providerList.splice(contractPosition, contractPosition + 1)
            providerList.push(contract);
        } else {
            throw new exception
        }    
    }
    
    export {getProviderRepository, getAllProvidersRepository, addProviderRepository, deleteProviderRepository,editProviderRepository}