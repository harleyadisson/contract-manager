export class Contract {
  id: string;
  providerDocument: string;
  name: string;
  serviceDescription: string;
  term: ContractTerm;
}

class ContractTerm {
  startDate: string;
  endDate: string;
}