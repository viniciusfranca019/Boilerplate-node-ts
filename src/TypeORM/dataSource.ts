import "reflect-metadata";
import { DataSource } from "typeorm";
import * as dotenv from 'dotenv';

dotenv.config();

const DB_PORT = Number(process.env.POSTGRES_PORT) || 5432;

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.POSTGRES_HOST,
    port: DB_PORT,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    synchronize: false,
    logging: false,
    entities: [],
    migrations: [],
    subscribers: [],
})