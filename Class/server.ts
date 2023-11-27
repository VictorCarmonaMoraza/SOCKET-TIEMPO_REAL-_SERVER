
//Importaciones
import express from 'express';
import { SERVER_PORT } from '../global/environment';


export default class Server {

    public app: express.Application;
    //Puerto donde va a estar corriendo nuestro servidor
    public port: number;

    constructor() {
        this.app = express();
        this.port = SERVER_PORT;
    }

    /**
     * Levantar Server
     */
    star(callback: Function) {
        this.app.listen(this.port, callback());
    }

}