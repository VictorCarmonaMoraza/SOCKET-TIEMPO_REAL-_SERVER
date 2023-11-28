"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Importaciones
const express_1 = __importDefault(require("express"));
const environment_1 = require("../global/environment");
const socket_io_1 = __importDefault(require("socket.io"));
const http_1 = __importDefault(require("http"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = environment_1.SERVER_PORT;
        //Necsita recibir la configuracion del servidor que esta corriendo
        this.httpServer = new http_1.default.Server(this.app);
        this.io = new socket_io_1.default.Server(this.httpServer, { cors: { origin: true, credentials: true } });
        this.escucharSockets();
    }
    static get instance() {
        //return this._instance || (this._instance = new Server())  --> Es lo mismo
        //Con esto le decimso que si ya existe una instancia devuelve la instancia  y sino existe
        //creala
        return this._instance || (this._instance = new this());
    }
    escucharSockets() {
        console.log('Escuchando conexiones');
        //on es para escuchar algun evento
        this.io.on('connection', cliente => {
            console.log('Cliente conectado');
        });
    }
    /**
     * Levantar Server
     */
    star(callback) {
        this.httpServer.listen(this.port, callback());
    }
}
exports.default = Server;
