import { DatabaseConfig } from "../../Database/Config/IDatabaseConfig";
import { MySQLConfig } from "../../Database/Config/MySQL/MySQLConfig";
import { CreateTransactionUseCase } from "../Application/UseCases/CreateTransactionUseCase";
import { GetAllUseCase } from "../Application/UseCases/GetAllUseCase";
import { GetMembershipByUserUseCase } from "../Application/UseCases/GetMembershipByUserUseCase";
import { GetShipmentByUUIDUseCase } from "../Application/UseCases/GetShipmentByUUIDUseCase";
import { CreateTransactioncontroller } from "./Controllers/CreateTransactionController";
import { GetAllController } from "./Controllers/GetAllController";
import { GetMembershipByUserController } from "./Controllers/GetMembershipByUserController";
import { GetShipmentByUUIDController } from "./Controllers/GetShipmentByUUIDController";
import { TransactionMySQLRepository } from "./Repositories/TransactionMySQLRepository";

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

const repository: TransactionMySQLRepository = new TransactionMySQLRepository();

const createTransactionUseCase: CreateTransactionUseCase = new CreateTransactionUseCase(repository);
const getMembershipByUserUseCase: GetMembershipByUserUseCase = new GetMembershipByUserUseCase(repository);
const getShipmentByUUIDUseCase: GetShipmentByUUIDUseCase = new GetShipmentByUUIDUseCase(repository);
const getAllUseCase: GetAllUseCase = new GetAllUseCase(repository);

export const createTransactionController: CreateTransactioncontroller = new CreateTransactioncontroller(createTransactionUseCase);
export const getMembershipByUserController: GetMembershipByUserController = new GetMembershipByUserController(getMembershipByUserUseCase);
export const getShipmentByUUIDController: GetShipmentByUUIDController = new GetShipmentByUUIDController(getShipmentByUUIDUseCase);
export const getAllController: GetAllController = new GetAllController(getAllUseCase);