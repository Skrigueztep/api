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
    }

    private setRoutes(): void {
        // this._server.use();
    }

    start(): express.Application {
        return this._server;
    }

}
