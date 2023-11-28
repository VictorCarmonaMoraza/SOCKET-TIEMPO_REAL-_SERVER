import { Socket } from 'socket.io';
//Aqui crearemos las acciones y configuraciones(logica de los sockets)



//Logica para desconectar un cliente
export const desconectar = (cliente:Socket) => {

    //escuchamos el cliente
    cliente.on('disconnect',()=>{
        console.log('Cliente desconectado');
    });
}