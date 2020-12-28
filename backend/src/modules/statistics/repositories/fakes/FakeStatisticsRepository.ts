import { uuid } from 'uuidv4';

import Statistic from '@modules/statistics/infra/typeorm/entities/Statistic';

import IStatisticsRepository from '@modules/statistics/repositories/IStatisticsRepository';
import ICreateStatisticDTO from '@modules/statistics/dtos/ICreateStatisticDTO';

class StatisticsRepository implements IStatisticsRepository {
  private statistics: Statistic[] = [];

  public async findByDeck(deck: string): Promise<Statistic | undefined> {
    const findStatistic = this.statistics.find(
      statistic => statistic.deck === deck,
    );

    return findStatistic;
  }

  public async create({
    deck,
    wins,
    loses,
    duelist_id,
  }: ICreateStatisticDTO): Promise<Statistic> {
    const statistic = new Statistic();

    Object.assign(statistic, { id: uuid(), deck, wins, loses, duelist_id });

    this.statistics.push(statistic);

    return statistic;
  }
}

export default StatisticsRepository;
