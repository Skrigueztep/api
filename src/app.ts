import {Server} from "./server";
import http from "http";
import express from "express";

export class App extends Server {

    private _http: http.Server;

    constructor() {
        super();
        this._http = new http.Server();
        this.init();
    }

    private init() {
        const server: express.Application = this.start();
        const port = server.get('PORT');
        this._http.listen(port, () => {
            console.log(`Server running on port: ${port}...`);
        });
    }

}

new App();
