import Server from "./Class/server";
import { SERVER_PORT } from "./global/environment";
import  router  from "./routes/router";

 const server = new Server();


server.app.use('/', router)

server.star(()=>{
    //Opcion 1
    console.log(`Servidor corriendo en el puerto ${server.port} --> Opcion 1`);

    //Opcion 2
    console.log(`Servidor corriendo en el puerto ${SERVER_PORT} --> Opcion 2`);
    
});