import {Router} from "express";

export class Api {

    private readonly _router: Router;

    constructor() {
        this._router = Router();
    }

    setRoutesV1(): Router {
        // this._router.use();
        return this._router;
    }

}
