import express, { Request, Response, NextFunction } from 'express';
import { getContract, getAllContracts, addContract, deleteContract, editContract } from '../services/contract.service';

const contract = express.Router();

contract.get('/', (req: Request, response: Response) => {
    try {
        getAllContracts()
        .then(contract => {
            response.status(200).send(contract)
        })
        .catch(err => response.status(404).send(err))
    } catch (error) {
        response.status(403).send("Digite novamente o número de Identificação")
    }
})

contract.post('/', express.json(), (req: Request, response: Response) => {
    try {
     addContract(req.body)
     .then(id => {
        response.status(200).send(id);
     })
     .catch(err => response.status(500).send(err))
     
    } catch (error) {
        response.status(403).send("Digite novamente o número de Identificação")
    }
})

contract.put('/', express.json(), (req: Request, response: Response) => {
    console.log(req.body)
    try {
        editContract(req.body)
        response.status(200).send("Editado com sucesso")
     }
     catch (error) {
        response.status(403).send("Digite novamente o número de Identificação")
    }
})

contract.delete('/', (req: Request, response: Response) => {
    console.log(req.query)
    try {
        deleteContract(req.query.id.toString())   
     response.status(200).send('Registro deletado com sucesso')  
    } catch (error) {
        response.status(403).send("Não foi possível deletar o contrato")
    }
})

contract.get('/:id', (req: Request, response: Response) => {
    try {
        getContract(req.params.id.toString())
        .then(contract => {
            response.status(200).send(contract)
        })
        .catch(err => response.status(404).send(err))
    } catch (error) {
        response.status(403).send("Digite novamente o número de Identificação")
    }
})

export default contract;