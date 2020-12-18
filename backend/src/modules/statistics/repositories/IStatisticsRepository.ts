import Statistic from '@modules/statistics/infra/typeorm/entities/Statistic';
import ICreateStatisticDTO from '@modules/statistics/dtos/ICreateStatisticDTO';

export default interface IStatisticsRepository {
  create(data: ICreateStatisticDTO): Promise<Statistic>;
  findByDeck(deck: string): Promise<Statistic | undefined>;
}
