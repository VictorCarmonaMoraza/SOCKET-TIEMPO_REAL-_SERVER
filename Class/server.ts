
//Importaciones
import express from 'express';
import { SERVER_PORT } from '../global/environment';
import socketIO from 'socket.io';
import http from 'http';

export default class Server {

    public app: express.Application;
    //Puerto donde va a estar corriendo nuestro servidor
    public port: number;

    public io: socketIO.Server;
    private httpServer: http.Server;

    private static _instance: Server;

    private constructor() {
        this.app = express();
        this.port = SERVER_PORT;

        //Necsita recibir la configuracion del servidor que esta corriendo
        this.httpServer = new http.Server(this.app);
        this.io = new socketIO.Server(this.httpServer, { cors: { origin: true, credentials: true } })

        this.escucharSockets();
    }

    public static get instance() {
        //return this._instance || (this._instance = new Server())  --> Es lo mismo
        //Con esto le decimso que si ya existe una instancia devuelve la instancia  y sino existe
        //creala
        return this._instance || (this._instance = new this());
    }

    private escucharSockets() {
        console.log('Escuchando conexiones');

        //on es para escuchar algun evento
        this.io.on('connection', cliente => {
            console.log('Cliente conectado');
        });
    }

    /**
     * Levantar Server
     */
    star(callback: Function) {
        this.httpServer.listen(this.port, callback());
    }

}