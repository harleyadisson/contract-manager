    import { Provider } from "../../domain/provider";
    import { ProviderType } from "../../domain/provider.type";

    const provider1: Provider = {
        id: '1234',
        providerType: ProviderType.PESSOA_FISICA,
        document:  '73198025000115',
        name: 'Harley Adisson',
        email: 'harleyadisson@outlook.com',
        address: { 
            cep: '73198025000115',
            logradouro:'Bayeux',
            complemento: '73198025000115',
            bairro: '73198025000115',
            localidade: '73198025000115',
            uf: '73198025000115',
            ibge: '73198025000115',
            gia: '73198025000115',
            ddd: '73198025000115',
            siafi: '73198025000115'
        }
    }

    const provider2: Provider = {
        id: '1233',
        providerType: ProviderType.PESSOA_JURIDICA,
        document:  '88198025000115',
        name: 'Bruno Adisson',
        email: 'bruno@outlook.com',
        address: { 
            cep: '73198025000115',
            logradouro:'João Pessoa',
            complemento: '73198025000115',
            bairro: '73198025000115',
            localidade: '73198025000115',
            uf: '73198025000115',
            ibge: '73198025000115',
            gia: '73198025000115',
            ddd: '73198025000115',
            siafi: '73198025000115'
        }
    }
 
export const providerList: Array<Provider> = [provider1, provider2];