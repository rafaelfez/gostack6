import { getCustomRepository } from 'typeorm';
// import AppError from '../errors/AppError';
import TransactionRepository from '../repositories/TransactionsRepository';
class DeleteTransactionService {
  public async execute(id: string): Promise<Boolean> {
    const transactionRepository = getCustomRepository(TransactionRepository);

    await transactionRepository.delete(id);

    return true;
  }
}

export default DeleteTransactionService;
