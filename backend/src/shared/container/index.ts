import { container } from 'tsyringe';

import IStatisticsRepository from '@modules/statistics/repositories/IStatisticsRepository';
import StatisticsRepository from '@modules/statistics/infra/typeorm/repositories/StatisticsRepository';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

container.registerSingleton<IStatisticsRepository>(
  'StatisticsRepository',
  StatisticsRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
