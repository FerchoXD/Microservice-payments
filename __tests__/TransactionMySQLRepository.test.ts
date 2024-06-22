import { TransactionMySQLRepository } from '../src/PaymentManagment/Infraestructure/Repositories/TransactionMySQLRepository';
import { TransactionModel } from '../src/PaymentManagment/Infraestructure/Models/MySQL/TransactionModel';

// Mocking the TransactionModel methods
jest.mock('../src/PaymentManagment/Infraestructure/Models/MySQL/TransactionModel');

describe('TransactionMySQLRepository', () => {
  let repository: TransactionMySQLRepository;

  beforeEach(() => {
    repository = new TransactionMySQLRepository();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should return 201 with data when transaction is created', async () => {
    //! Arrange
    const mockData = {
      uuid: '123',
      membershipName: 'Gold',
      status: 'active',
      userUUID: 'user-uuid',
      shipmentUUID: 'shipment-uuid',
      amount: 100,
      transactionDate: new Date()
    };

    const createdTransaction = {
      toJSON: () => ({
        ...mockData,
        transactionDate: mockData.transactionDate.toISOString(), // Convertir a formato ISO para la comparación
      }),
    };

    (TransactionModel.create as jest.Mock).mockResolvedValue(createdTransaction);

    const response = await repository.create(
      mockData.membershipName,
      mockData.status,
      mockData.userUUID,
      mockData.shipmentUUID,
      mockData.amount,
      mockData.transactionDate
    );

    // expects
    expect(response.status).toBe(201);
    expect(response.data.uuid).toBe(mockData.uuid);
    expect(response.data.membershipName).toBe(mockData.membershipName);
    expect(response.data.status).toBe(mockData.status);
    expect(response.data.userUUID).toBe(mockData.userUUID);
    expect(response.data.shipmentUUID).toBe(mockData.shipmentUUID);
    // Use toBeCloseTo to compare the date
    expect(new Date(response.data.transactionDate).getTime()).toBeCloseTo(mockData.transactionDate.getTime(), 2); // Acepta una diferencia de 2 milisegundos
  });

  describe('getMembershipByUser', () => {
    it('should return 200 with data when user is found', async () => {
      const mockData = {
        toJSON: () => ({
          uuid: '123',
          userUUID: 'user-uuid',
          membershipName: 'Gold',
          status: 'active',
        }),
      };

      (TransactionModel.findOne as jest.Mock).mockResolvedValue(mockData);

      const response = await repository.getMembershipByUser('user-uuid');

      expect(response).toEqual({
        status: 200,
        data: mockData.toJSON(),
      });
    });

    it('should return 404 when user is not found', async () => {
      (TransactionModel.findOne as jest.Mock).mockResolvedValue(null);

      const response = await repository.getMembershipByUser('non-existent-user-uuid');

      expect(response).toEqual({
        status: 404,
        message: 'User not found',
      });
    });

    it('should return 500 on internal server error', async () => {
      (TransactionModel.findOne as jest.Mock).mockRejectedValue(new Error('Internal error'));

      const response = await repository.getMembershipByUser('user-uuid');

      expect(response).toEqual({
        status: 500,
        message: 'Internal server error',
      });
    });
  });

  describe('getShipmentByUUID', () => { 
    it('should return 200 with data when shipment is found', async () => {
      const mockData = {
        toJSON: () => ({
          uuid: '123',
          userUUID: 'user-uuid',
          amount: 100,
          status: 'delivered',
        }),
      };

      (TransactionModel.findOne as jest.Mock).mockResolvedValue(mockData);

      const response = await repository.getShipmentByUUID('shipment-uuid');

      expect(response).toEqual({
        status: 200,
        data: mockData.toJSON(),
      });
    });


    it('should return 404 when shipment is not found', async () => {
      (TransactionModel.findOne as jest.Mock).mockResolvedValue(null);

      const response = await repository.getShipmentByUUID('non-existent-shipment-uuid');

      expect(response).toEqual({
        status: 404,
        message: 'User not found',
      });
    });

    it('should return 500 on internal server error', async () => {
      (TransactionModel.findOne as jest.Mock).mockRejectedValue(new Error('Internal error'));

      const response = await repository.getShipmentByUUID('shipment-uuid');

      expect(response).toEqual({
        status: 500,
        message: 'Internal server error',
      });
    });
  });
});
