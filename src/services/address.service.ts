import fetch from 'node-fetch';
import { Address } from '../domain/address';

const getAddress = (cep: string) => {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    return new Promise<Address>((resolve, reject) => {
        fetch(url)
        .then(data => {return data.json()})
        .then(address => {
           resolve(address)
        })
        .catch(err => {
            reject(err)
        })
    });
}

export default getAddress;

