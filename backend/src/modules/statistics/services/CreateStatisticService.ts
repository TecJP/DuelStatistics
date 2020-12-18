import Statistic from '@modules/statistics/infra/typeorm/entities/Statistic';
import IStatisticsRepository from '@modules/statistics/repositories/IStatisticsRepository';

import AppError from '@shared/errors/AppError';

interface IRequest {
  deck: string;
  wins: number;
  loses: number;
  duelist_id: string;
}

class CreateStatisticService {
  constructor(private statisticsRepository: IStatisticsRepository) {}

  public async execute({ deck, wins, loses, duelist_id }: IRequest): Promise<Statistic> {
    if ((wins | loses) < 0) {
      throw new AppError('The value is below than 0.');
    }

    const statistic = await this.statisticsRepository.create({
      deck,
      wins,
      loses,
      duelist_id,
    });

    return statistic;
  }
}

export default CreateStatisticService;
