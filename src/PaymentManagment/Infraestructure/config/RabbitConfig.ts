import amqp from 'amqplib';
import dotenv from 'dotenv';

dotenv.config();

const hostname = process.env.RABBITMQ_HOST || 'localhost';
const protocol = process.env.RABBITMQ_PROTOCOL;
const user = process.env.RABBITMQ_USER;
const password = process.env.RABBITMQ_PASS;
const port = process.env.RABBITMQ_PORT;

const rabbitSettings: any = {
    protocol: protocol,
    hostname: hostname,
    port: port,
    username: user,
    password: password
}

export async function setupRabbitMQ(queueName: string, exchangeName: string, routingKey: string) {
    const connection = await amqp.connect(rabbitSettings);
    const channel = await connection.createChannel();
    await channel.assertQueue(queueName, { durable: true });
    await channel.bindQueue(queueName, exchangeName, routingKey);
    return channel;
}


