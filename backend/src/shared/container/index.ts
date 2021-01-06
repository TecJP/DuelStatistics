import { container } from 'tsyringe';

import '@modules/users/providers';
import '@shared/container/providers';

import IStatisticsRepository from '@modules/statistics/repositories/IStatisticsRepository';
import StatisticsRepository from '@modules/statistics/infra/typeorm/repositories/StatisticsRepository';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

// import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';
// import UserTokensRepository from '@modules/users/infra/typeorm/repositories/';

container.registerSingleton<IStatisticsRepository>(
  'StatisticsRepository',
  StatisticsRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
