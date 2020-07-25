import express from 'express';
import {environment} from "./environments/environment";

export class Server {

    private readonly _server: express.Application;

    constructor() {
        this._server = express();
        this.setConfig();
        this.setRoutes();
    }

    private setConfig(): void {
        this._server.set('PORT', environment.port);
        this._server.use(express.json());
        this._server.use(express.urlencoded({ extended: false }));
    }

    private setRoutes(): void {
        // this._server.use();
    }

    start(): express.Application {
        return this._server;
    }

}
