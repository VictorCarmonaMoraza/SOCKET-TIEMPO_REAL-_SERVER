import { Socket } from 'socket.io';
//Aqui crearemos las acciones y configuraciones(logica de los sockets)



//Logica para desconectar un cliente
export const desconectar = (cliente: Socket) => {

    //escuchamos el cliente
    cliente.on('disconnect', () => {
        console.log('Cliente desconectado');
    });
}

//Escuchar mensaje
export const mensaje = (cliente: Socket) => {

    cliente.on('mensaje', (payload: { de: string, cuerpo: string }) => {
        console.log('Mensaje recibido', payload);
    });
}