import express, { response }  from 'express';
import address  from './controller/address.controller';
import contract from './controller/contract.controller';
import provider from './controller/provider.controller';

const app = express();
const port = 3000;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
});

app.get('/', (req, res) => {
     res.send('Sistema de gerenciamento de Contratos')
})

app.use('/address', address);
app.use('/contract', contract);
app.use('/provider', provider);


app.listen(port, () => {
  console.log(`Sistema de gerenciamento de Contratos está rodando na porta ${port}.`);
});

