"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./Class/server"));
const environment_1 = require("./global/environment");
const router_1 = __importDefault(require("./routes/router"));
const body_parser_1 = __importDefault(require("body-parser"));
const server = new server_1.default();
//Siempre antes de la configuracion de las rutas (BodyParser)
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
server.app.use('/', router_1.default);
server.star(() => {
    //Opcion 1
    console.log(`Servidor corriendo en el puerto ${server.port} --> Opcion 1`);
    //Opcion 2
    console.log(`Servidor corriendo en el puerto ${environment_1.SERVER_PORT} --> Opcion 2`);
});
