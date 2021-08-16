import express, { response }  from 'express';
import address  from './controller/address.controller';
import contract from './controller/contract.controller';
import provider from './controller/provider.controller';
import "reflect-metadata";
import Database from './infraestructure/database/database-connection';

const app = express();
const port = 3000;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
});

app.get('/health', (req, res) => {
     res.send({"status": true})
})

app.use('/address', address);
app.use('/contract', contract);
app.use('/provider', provider);

Database.getInstance();

app.listen(port, () => {
  console.log(`Sistema de gerenciamento de Contratos está rodando na porta ${port}.`);
});



