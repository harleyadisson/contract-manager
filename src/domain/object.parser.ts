import { Address } from "./address"
import { Provider } from "./provider"
import { Contract } from "./contract"
import { ContractTerm } from "./contract.term"

const parseAddress = (address: any): Address => {
  let convertedAddress = new Address()
  convertedAddress.id = address.id
  convertedAddress.cep = address.cep
  convertedAddress.logradouro = address.logradouro
  convertedAddress.numero = address.numero
  convertedAddress.complemento = address.complemento
  convertedAddress.bairro = address.bairro
  convertedAddress.localidade = address.localidade
  convertedAddress.ibge = address.ibge
  convertedAddress.gia = address.gia
  convertedAddress.ddd = address.ddd
  convertedAddress.siafi = address.siafi
  convertedAddress.uf = address.uf

  return convertedAddress;
}

const parseProvider = (provider: any): Provider => {
  let convertedProvider = new Provider()
  convertedProvider.providerType = provider.providerType
  convertedProvider.document = provider.document
  convertedProvider.name = provider.name
  convertedProvider.email = provider.email
  convertedProvider.contracts = provider.contracts

  if(provider.address)
    convertedProvider.address = parseAddress(provider.address)

  return convertedProvider
}

const parseTerm = (term: any): ContractTerm => {
  let convertedTerm =  new ContractTerm()
  convertedTerm.id = term.id
  convertedTerm.startDate = term.startDate
  convertedTerm.endDate = term.endDate

  return convertedTerm
}
const parseContract = (contract: any): Contract => {
  let convertedContract = new Contract()
  convertedContract.id = contract.id
  convertedContract.name = contract.name
  convertedContract.serviceDescription = contract.serviceDescription

  if(contract.provider)
    convertedContract.provider = parseProvider(contract.provider)

  if(contract.term)
    convertedContract.term = parseTerm(contract.term)

  return convertedContract
}

export { parseAddress, parseProvider, parseContract, parseTerm };