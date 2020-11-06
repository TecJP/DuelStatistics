import { getCustomRepository } from 'typeorm';

import Statistic from '../models/Statistic';
import StatisticsRepository from '../repositories/StatisticsRepository';

import AppError from '../errors/AppError';

interface Request {
  deck: string;
  wins: number;
  loses: number;
  duelist_id: string;
}

class CreateStatisticService {
  public async execute({ deck, wins, loses, duelist_id }: Request): Promise<Statistic> {
    const statisticsRepository = getCustomRepository(StatisticsRepository);

    if ((wins | loses) < 0) {
      throw new AppError('The value is below than 0.');
    }

    const statistic = statisticsRepository.create({
      deck,
      wins,
      loses,
      duelist_id,
    });

    await statisticsRepository.save(statistic);

    return statistic;
  }
}

export default CreateStatisticService;
