import { Provider } from '../domain/provider'
import { addProviderRepository, deleteProviderRepository, editProviderRepository, getAllProvidersRepository, getProviderRepository } from '../repository/provider.repository';

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
            .then(document => {
                resolve(document)
            })
            .catch(err => reject(err))
        });
    }

    const deleteProvider = (document: string) => {
        try {
            deleteProviderRepository(document);
        } catch (error) {
            throw new Error(error.message);
        }
    }

    const editProvider = (contract: Provider) => {
        try {
            editProviderRepository(contract)
        } catch (error) {
            throw new Error(error.message);
        }
    }

    export {getProvider, getAllProviders, addProvider,deleteProvider, editProvider}