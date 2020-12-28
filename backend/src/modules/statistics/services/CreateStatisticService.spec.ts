import 'reflect-metadata';

import AppError from '@shared/errors/AppError';

import CreateStatisticService from '@modules/statistics/services/CreateStatisticService';
import FakeStatisticsRepository from '@modules/statistics/repositories/fakes/FakeStatisticsRepository';

describe('CreateStatistic', () => {
  it('should be able to create a new statistic', async () => {
    const fakeStatisticsRepository = new FakeStatisticsRepository();

    const createStatistic = new CreateStatisticService(fakeStatisticsRepository);

    const statistic = await createStatistic.execute({
      deck: 'Name_Deck',
      wins: 12,
      loses: 4,
      duelist_id: '1234512345',
    });

    expect(statistic).toHaveProperty('id');
  });

  it('should not be able to create a statistic with a negative value', async () => {
    const fakeStatisticsRepository = new FakeStatisticsRepository();

    const createStatistic = new CreateStatisticService(fakeStatisticsRepository);

    expect(createStatistic.execute({
      deck: 'Name_Deck',
      wins: -2,
      loses: -4,
      duelist_id: '1234512345',
    })).rejects.toBeInstanceOf(AppError);
  });
});
