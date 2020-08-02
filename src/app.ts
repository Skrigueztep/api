import {Server} from "./server";
import http from "http2";
import express from "express";

export class App extends Server {

    private _http: http.Http2Server;
    private readonly _application: express.Application;

    constructor() {
        super();
        this._application = this.start();
        this._http = http.createServer(this._application);
        this.init();
    }

    private init() {
        const port = this._application.get('PORT');
        this._http.listen(port, () => {
            console.log(`Server running on port: ${port}...`);
        });
    }

}

new App();
