import express, { Request, Response, NextFunction } from 'express';
import getAddress from '../services/address.service';

const address = express.Router();

address.get('/', (req: Request, response: Response, next: NextFunction) => {
    try {
        getAddress(req.query.cep.toString())
        .then(address => {
            response.status(200).send(address)
        })
        .catch(err => response.status(404).send(err))
    } catch (error) {
        response.status(403).send("Forneça o Cep para recuperar o endereço")
    }
})

export default address;