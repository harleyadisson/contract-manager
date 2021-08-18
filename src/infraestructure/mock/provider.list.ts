    import { Provider } from "../../domain/provider";
    import { ProviderType } from "../../domain/provider.type";

    const provider1: Provider = {
        id: '1234',
        providerType: ProviderType.PESSOA_FISICA,
        document:  '10167028413',
        name: 'Harley Adisson',
        email: 'harleyadisson@outlook.com',
        address: { 
            id: '123',
            cep: '58053020',
            logradouro:'Rua Carteiro Olivio Pontes',
            complemento: 'apt 404',
            bairro: 'Jardim Cidade Universitária',
            localidade: 'João Pessoa',
            uf: 'Paraíba',
            ibge: '**********',
            gia: '*******',
            ddd: '83',
            siafi: '***********'
        }
    }

    const provider2: Provider = {
        id: '1233',
        providerType: ProviderType.PESSOA_JURIDICA,
        document:  '88198025000115',
        name: 'Lucas Adisson',
        email: 'lucas@outlook.com',
        address: { 
            id: '123',
            cep: '58055630',
            logradouro:'Julio Pereira da Silva',
            complemento: 'casa 1° andar',
            bairro: 'Mangabeira',
            localidade: 'João Pessoa',
            uf: 'Paraíba',
            ibge: '********',
            gia: '***********',
            ddd: '83',
            siafi: '***********'
        }
    }
 
export const providerList: Array<Provider> = [provider1, provider2];