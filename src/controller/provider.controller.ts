import express, { Request, Response } from 'express';
import { addProvider, deleteProvider, editProvider, getAllProviders, getProvider } from '../services/provider.service'

const provider = express.Router();

provider.get('/', (req: Request, response: Response) => {
    try {
        getAllProviders()
            .then(provider => {
                response.status(200).send(provider)
            })
            .catch(err => response.status(404).send(err))
    } catch (error) {
        response.status(403).send("Forneça o dado correto!")
    }
})

provider.post('/', express.json(), (req: Request, response: Response) => {
    try {
        addProvider(req.body)
            .then(document => {
                response.status(200).send(document)
            })
            .catch(err => response.status(500).send(err))
    } catch (error) {
        response.status(403).send("Forneça o dado correto!")
    }
})

provider.delete('/', async(req: Request, response: Response) => {
    try {
        await deleteProvider(req.query.document.toString())
        response.status(200).send('Registro deletado com sucesso')
    } catch (error) {
        response.status(403).send("Não foi possível deletar o contrato")
    }
})

provider.get('/:document', (req: Request, response: Response) => {
    try {
        getProvider(req.params.document.toString())
            .then(provider => {
                response.status(200).send(provider)
            })
            .catch(err => response.status(404).send(err))
    } catch (error) {
        response.status(403).send("Forneça o dado correto!")
    }
})

provider.put('/', express.json(), (req: Request, response: Response) => {
    try {
        editProvider(req.body)
        response.status(200).send("Editado com sucesso")
    }
    catch (error) {
        response.status(403).send("Digite novamente o número de Identificação")
    }
})

export default provider;