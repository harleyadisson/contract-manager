import { Provider } from '../domain/provider'
import Database from '../infraestructure/database/database-connection';

import { parseProvider } from '../domain/object.parser';

const getProviderRepository = (document: string) => {
    return new Promise<Provider>((resolve, reject) => {
        try {
            Database.getInstance().getConnection().getRepository(Provider).findOneOrFail({ "document": document }, { relations: ["address"] })
                .then(data => {
                    resolve(data)
                })
                .catch((err) => {
                    reject(`Nenhum provider encontrado ${err}` )
                })
        } catch (error) {
            console.error(error)
            reject(`Erro ao recuperar prestadores de serviço: ${error}`)
        }
    });
}

const getAllProvidersRepository = () => {
    return new Promise<Array<Provider>>((resolve, reject) => {
        try {
            Database.getInstance().getConnection().getRepository(Provider).find({ relations: ["address"] })
                .then(data => {
                    resolve(data)
                })
                .catch(error => {
                    reject(`Erro ao recuperar Prestadores de serviços`)
                })

        } catch (error) {
            reject(`erro ao recuperar prestadores de serviço: ${error}`)
        }
    });
}

const addProviderRepository = (provider: Provider) => {
    return new Promise<string>((resolve, reject) => {
        try {

            getProviderRepository(provider.document)
            .then(() => {
                reject(`Erro ao cadastrar provider: ${provider.document}`)
            });

            Database.getInstance().getConnection().getRepository(Provider).save(parseProvider(provider))
                .then(data => {
                    resolve(data.toString())
                })
                .catch(() => {
                    reject(`Já existe um prestador de serviço cadastrado no Documento`)
                })
        } catch (error) {
            reject(`Erro ao cadastrar provider: ${provider.document}`)
        }
    });
}

const deleteProviderRepository = (id: string) => {
    return new Promise<string>((resolve, reject) => {
        try {
            Database.getInstance().getConnection().getRepository(Provider).delete({ "document": id })
                .then(data => {
                    resolve(data.toString())
                })
                .catch(() => {
                    reject(`Esse prestador tem contratos ativos, remova-o dos contratos primeiro`)
                })

        } catch (error) {
            reject(`Esse prestador tem contratos ativos, remova-o dos contratos primeiro${error}`)
        }
    });
}

const editProviderRepository = (provider: Provider) => {
    return new Promise<string>(async (resolve, reject) => {
        try {

            let providerRetrieved = await getProviderRepository(provider.document)

            providerRetrieved.email = provider.email
            providerRetrieved.name = provider.name
            providerRetrieved.document = provider.document
            providerRetrieved.address = provider.address
            providerRetrieved.providerType = provider.providerType


            Database.getInstance().getConnection().getRepository(Provider).save(providerRetrieved)
                .then(data => {

                    resolve(provider.document)

                })
                .catch(error => {
                    reject(`Já existe um prestador de serviço cadastrado no Documento`)
                })

        } catch (error) {
            console.log(error)
            reject(`Já existe um prestador de serviço cadastrado no Documento: ${provider.document}`)
        }
    });
}

export { getProviderRepository, getAllProvidersRepository, addProviderRepository, deleteProviderRepository, editProviderRepository }