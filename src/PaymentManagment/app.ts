import express, { Application } from "express";
import cors from "cors";
import morgan from 'morgan';
import { TransactionRouter } from "./Infraestructure/Routes/TransactionRouter";
import { DecreaceSoldProductUseCaseService } from "./Infraestructure/Dependencies";
import { setupRabbitMQ } from "./Infraestructure/config/RabbitConfig";

const app:Application = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


app.use('/api/v1/transactions', TransactionRouter);

const port:string = process.env.PORT || '3000';

let server = null;

async function startServer() {
    await DecreaceSoldProductUseCaseService();

    server = app.listen(port, async () => {
        console.log(`SERVER RUNNING IN http://localhost:${port}.`);

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


