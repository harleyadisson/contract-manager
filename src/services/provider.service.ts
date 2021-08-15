import { Provider } from '../domain/provider'
import { addProviderRepository, deleteProviderRepository, editProviderRepository, getAllProvidersRepository, getProviderRepository } from '../repository/provider.repository';
import { exception } from 'console';

    const getProvider = (document: string) => {
        return new Promise<Provider>((resolve, reject) => {
        getProviderRepository(document)
        .then(selectedProvider => {
            resolve(selectedProvider)
        })
        .catch(err => reject(err))
        });
    }

    const getAllProviders = () => {
        return new Promise<Array<Provider>>((resolve, reject) => {
            resolve(getAllProvidersRepository())
        });
    }

    const addProvider = (provider: Provider) => {
        return new Promise<string>((resolve, reject) => {
            addProviderRepository(provider)
            .then(id => {
                resolve(id)
            })
            .catch(err => reject(err))
        });
    }

    const deleteProvider = (id: string) => {
        try {
            deleteProviderRepository(id);
        } catch (error) {
            throw new exception
        }
    }

    const editProvider = (contract: Provider) => {
        try {
            editProviderRepository(contract);
        } catch (error) {
            throw new exception
        }
    }

    export {getProvider, getAllProviders, addProvider,deleteProvider, editProvider}