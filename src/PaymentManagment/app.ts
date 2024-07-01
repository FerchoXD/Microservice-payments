import express, { Application } from "express";
import cors from "cors";
import morgan from 'morgan';
import { TransactionRouter } from "./Infraestructure/Routes/TransactionRouter";
import { DecreaceSoldProductUseCaseService } from "./Infraestructure/Dependencies";
import {Signale} from "signale";
const app:Application = express();
const signale = new Signale();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


app.use('/payments/api/v1/transactions', TransactionRouter);

const HOST:string = process.env.HOST_SERVER || '0.0.0.0';
const PORT:number  = Number(process.env.PORT_SERVER) || 8080;

let server = null;

async function startServer() {
    await DecreaceSoldProductUseCaseService();

    server = app.listen(PORT, HOST, () => {
        signale.success(`Server running on http://${HOST}:${PORT}`);

        /*
        !!Descomentar para enviar mensajes a RabbitMQ
        // Ejemplo de mensaje que quieres enviar a la cola
        const message = {
            userUUID: '1234567890',
            action: 'membership_by_user'
        };

        // Configurar RabbitMQ y enviar el mensaje después de que el servidor haya iniciado
        try {
            const channel = await setupRabbitMQ('membership_queue', 'membership_exchange', 'membership_key');
            await channel.sendToQueue('membership_queue', Buffer.from(JSON.stringify(message)));
            console.log('Message sent to RabbitMQ:', message);
        } catch (error) {
            console.error('Error sending message to RabbitMQ:', error);
        }*/
    });
    
}

startServer();

export { app, server };


