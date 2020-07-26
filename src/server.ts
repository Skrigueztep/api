import express from 'express';
import {environment} from "./environments/environment";
import compression from "compression";
import cors from "cors";
import {Api} from "./api";

export class Server extends Api {

    private readonly _server: express.Application;
    private readonly _corsConfig: cors.CorsOptions;

    constructor() {
        super();
        this._server = express();
        this._corsConfig = {
            allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
            credentials: true,
            methods: "GET,HEAD,OPTIONS,PUT,POST,DELETE",
            origin: ["http://localhost:4200"],
            preflightContinue: false
        };
        this.setConfig();
        this.setRoutes();
    }

    private setConfig(): void {
        this._server.set('PORT', environment.port);
        this._server.use(express.json());
        this._server.use(express.urlencoded({ extended: false }));
        this._server.use(compression({ level: 9 }));
        this._server.use(cors(this._corsConfig));
    }

    private setRoutes(): void {
        this._server.use('/api/v1', this.setRoutesV1());
    }

    start(): express.Application {
        this._server.get('/', (req, res) => {
            res.status(200).send("Server working...");
        });

        this._server.get('/api', (req, res) => {
            res.status(200).send("API Server working...");
        });

        this._server.get('/api/v1', (req, res) => {
            res.status(200).send("API Server V1 working...");
        });
        return this._server;
    }

}
