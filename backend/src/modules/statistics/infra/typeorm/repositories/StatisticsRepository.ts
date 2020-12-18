import { getRepository, Repository } from 'typeorm';

import Statistic from '@modules/statistics/infra/typeorm/entities/Statistic';
import IStatisticsRepository from '@modules/statistics/repositories/IStatisticsRepository';
import ICreateStatisticDTO from '@modules/statistics/dtos/ICreateStatisticDTO';

class StatisticsRepository implements IStatisticsRepository {
  private ormRepository: Repository<Statistic>;

  constructor() {
    this.ormRepository = getRepository(Statistic);
  }

  public async findByDeck(deck: string): Promise<Statistic | undefined> {
    const findStatistic = await this.ormRepository.findOne({
      where: { deck }
    });

    return findStatistic;
  }

  public async create({ deck, wins, loses, duelist_id }: ICreateStatisticDTO): Promise<Statistic> {
    const statistic = this.ormRepository.create({ deck, wins, loses, duelist_id });

    await this.ormRepository.save(statistic);

    return statistic;
  }
}

export default StatisticsRepository;
