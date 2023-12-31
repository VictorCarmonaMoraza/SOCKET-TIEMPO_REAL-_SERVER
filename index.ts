import cors from "cors";
import Server from "./Class/server";
import { SERVER_PORT } from "./global/environment";
import router from "./routes/router";

import bodyParser from "body-parser";


//const server = new Server();
const server = Server.instance;


//Siempre antes de la configuracion de las rutas (BodyParser)
server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json());


//Siempre antes de llamar a los servicios o rutas(CORS)
server.app.use(cors({ origin:true, credentials: true }));


server.app.use('/', router)

server.star(() => {
    //Opcion 1
    console.log(`Servidor corriendo en el puerto ${server.port} --> Opcion 1`);

    //Opcion 2
    console.log(`Servidor corriendo en el puerto ${SERVER_PORT} --> Opcion 2`);

});