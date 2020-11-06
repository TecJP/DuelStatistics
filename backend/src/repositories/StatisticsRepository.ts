import { EntityRepository, Repository } from 'typeorm';
import Statistic from '../models/Statistic';

@EntityRepository(Statistic)
class StatisticsRepository extends Repository<Statistic> {
  public async findByDeck(deck: string): Promise<Statistic | null >{
    const findStatistic = await this.findOne({
      where: { deck }
    });

    return findStatistic || null;
  }
}

export default StatisticsRepository;
