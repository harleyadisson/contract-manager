import "reflect-metadata";
import { Connection, ConnectionManager, createConnection } from "typeorm";
import { Address } from "../../domain/address";
import {Contract} from '../../domain/contract'
import { ContractTerm } from "../../domain/contract.term";
import { Provider } from "../../domain/provider";

class Database {
    private static connection: Database
    private connect: Connection;

    private constructor() {
        createConnection({
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "postgres",
            password: "admin",
            database: "contract-manager-database",
            entities: [
                Contract,
                Provider,
                Address,
                ContractTerm
            ],
            synchronize: true,
            logging: false
        }).then(dbConnection => {
            this.connect = dbConnection
            console.log('Banco de Dados criado com sucesso')
        }).catch(error => console.log(error));
     }

    public static getInstance(): Database {
        if (!Database.connection) {
            Database.connection = new Database();
        }

        return Database.connection;
    }

    getConnection() {
        return this.connect
    }
}

export default Database;