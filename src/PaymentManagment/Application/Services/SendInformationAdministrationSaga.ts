import { Signale } from 'signale';
import { setupRabbitMQ } from '../../Infraestructure/config/RabbitConfig';

export class SendInformationAdministrationSaga {
    private adminQueueName: string = process.env.RABBIT_QUEUE_ADMINISTRATION || 'admin_queue';
    private exchangeName: string = process.env.RABBIT_EXCHANGE_ADMINISTRATION || 'default';
    private routingKey: string = process.env.RABBIT_ROUTING_KEY_ADMINISTRATION || 'default';

    constructor() {}

    async sendMessage(adminMessage: any): Promise<void> {
        const signale = new Signale();
        try {
            const channel = await setupRabbitMQ(this.adminQueueName, this.exchangeName, this.routingKey);


            channel.sendToQueue(this.adminQueueName, Buffer.from(JSON.stringify(adminMessage)));
            signale.info(`Message sent to ${this.adminQueueName}:`, adminMessage);

        } catch (error) {
            signale.error('Error sending message to RabbitMQ:', error);
        }
    }
}
