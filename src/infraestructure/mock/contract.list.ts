import { Contract } from "../../domain/contract";

const contract: Contract = {
    id: '123',
    name: 'Harley software',
    providerDocument: '0842567092876',
    serviceDescription: 'Desenvolvimento de sites',
   term: {
       startDate: '10/08/2021',
       endDate: '10/08/2022'
   }
}

const contract2: Contract = {
    id: '1234',
    name: 'Harley software',
    providerDocument: '0842567092876',
    serviceDescription: 'Desenvolvimento de sites',
   term: {
       startDate: '10/08/2021',
       endDate: '10/08/2022'
   }
}

export const contractList: Array<Contract> = [contract, contract2];