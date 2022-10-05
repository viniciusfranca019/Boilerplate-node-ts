import { Server } from "./Server";
import * as dotenv from 'dotenv';

dotenv.config()

const PORT = process.env.PORT || 8080;

(new Server(PORT)).init();
