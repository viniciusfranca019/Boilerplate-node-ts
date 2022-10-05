import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

export class Server {
    app: Application;
    port: string|number;

    constructor(port: string|number) {
        this.app = express();
        this.port = port;
    }

    public init() {
      this.setMiddlewares();
      this.setRoutes();
      this.listenUp();
    }

    private setMiddlewares() {
      const { app } = this;
      app.use(bodyParser.json());
      app.use(bodyParser.urlencoded({ extended: true }));
      app.use(cors({ origin: true }))
    }

    private setRoutes() {
      const { app } = this;
      app.get('/', (req: Request, res: Response) => {
        res.send('Healthy boilerplate')
      })
    }

    private listenUp() {
      const { app, port } = this;
      app.listen(port, () => {
        console.log(`Server is running on PORT ${port}`)
      })
    }
}
