import { getPaymentRepository } from "../../Database/Config/GetRepositories";
import { DatabaseConfig } from "../../Database/Config/IDatabaseConfig";
import { MySQLConfig } from "../../Database/Config/MySQL/MySQLConfig";

import { CreatePaymentsUseCase } from '../Application/UseCases/CreatePaymentsUseCase';
import { GetPaymentsUseCase } from '../Application/UseCases/GetPaymentsUseCase';
import { UpdatePaymentsUseCase } from '../Application/UseCases/UpdatePaymentsUseCase';

import { CreatePaymentsController } from '../Infraestructure/Controllers/CreatePaymentsController';
import { GetPaymentsController } from '../Infraestructure/Controllers/GetPaymentsController';
import { UpdatePaymentsController } from '../Infraestructure/Controllers/UpdatePaymentsController';


export type DatabaseType = 'MySQL';
const dbType: DatabaseType = 'MySQL';

function getDatabaseConfig(): DatabaseConfig {
    if (dbType === 'MySQL') return new MySQLConfig();
    throw new Error('Unsupported repository type');
}

const dbConfig = getDatabaseConfig();
dbConfig.initialize().then(() => {
  console.log('Database initialized.')
});

const paymentRepository = getPaymentRepository(dbType);

const createPaymentsUseCase = new CreatePaymentsUseCase(paymentRepository);
export const createPaymentsController = new CreatePaymentsController(createPaymentsUseCase)

const getPaymentsUseCase = new GetPaymentsUseCase(paymentRepository);
export const getPaymentsController = new GetPaymentsController(getPaymentsUseCase);

const updatePaymentsUseCase = new UpdatePaymentsUseCase(paymentRepository);
export const updatePaymentsController = new UpdatePaymentsController(updatePaymentsUseCase);