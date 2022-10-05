import { Server } from "./Server";
import * as dotenv from 'dotenv';
import { AppDataSource } from "./TypeORM/dataSource";
import "reflect-metadata";

dotenv.config();

const PORT = process.env.APP_PORT || 8080;

const server = new Server(PORT);

AppDataSource.initialize()
    .then(() => {
      console.log("Data Source has been initialized!");
      server.init();
    })
    .catch((error : Error) => {
      console.error("Error during Data Source initialization:", error);
      server.init();
    })
