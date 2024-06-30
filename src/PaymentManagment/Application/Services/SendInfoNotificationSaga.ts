import { Signale } from 'signale';
import { setupRabbitMQ } from '../../Infraestructure/config/RabbitConfig';

export class SendInfoNotificationSaga {
    private queueName: string = process.env.RABBIT_QUEUE_NOTIFICATION_PAYMENT || 'send_info_notification_payment';
    private exchangeName: string = process.env.RABBIT_EXCHANGE_NOTIFICATION_PAYMENT || 'default';
    private routingKey: string = process.env.RABBIT_ROUTING_KEY_NOTIFICATION_PAYMENT || 'default';

    constructor() {}

    async sendMessage(message: any): Promise<void> {
        const signale = new Signale();
        try {
            const channel = await setupRabbitMQ(this.queueName, this.exchangeName, this.routingKey);

            // Aquí enviamos el mensaje a la cola
            channel.sendToQueue(this.queueName, Buffer.from(JSON.stringify(message)));
            signale.info(`Message sent to ${this.queueName}:`, message);

        } catch (error) {
            signale.error('Error sending message to RabbitMQ:', error);
        }
    }
}
