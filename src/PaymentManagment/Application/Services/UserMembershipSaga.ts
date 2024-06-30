import { Signale } from 'signale';
import { setupRabbitMQ } from '../../Infraestructure/config/RabbitConfig';
import { GetMembershipByUserUseCase } from '../UseCases/GetMembershipByUserUseCase';

export class UserMembershipSaga {
    private queueName: string = process.env.RABBIT_QUEUE_MEMBERSHIP || 'default';
    private exchangeName: string = process.env.RABBIT_EXCHANGE_MEMBERSHIP || 'default';
    private routingKey: string = process.env.RABBIT_ROUTING_KEY_MEMBERSHIP || 'default';

    constructor(private readonly getMembershipByUserUseCase: GetMembershipByUserUseCase) {}

    async receive(): Promise<void> {
        const signale = new Signale();
        try {
            const channel = await setupRabbitMQ(this.queueName, this.exchangeName, this.routingKey);

            signale.info(`Waiting for messages in ${this.queueName}.`);

            channel.consume(this.queueName, async (msg) => {
                if (msg) {
                    signale.info('Message received:', msg.content.toString());
                    const content: any = JSON.parse(msg.content.toString());
                    const userUUID = content.userUUID;

                    if (userUUID) {
                        const result = await this.getMembershipByUserUseCase.execute(userUUID);
                        signale.info('Result from getMembershipByUser:', result);
                    } else {
                        signale.error('Invalid message format. userUUID is required.');
                    }

                    channel.ack(msg);
                }
            });
        } catch (error) {
            signale.error('Error receiving message:', error);
        }
    }
}