import { Router } from 'express';
import { container } from 'tsyringe';

import CreateStatisticService from '@modules/statistics/services/CreateStatisticService';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const statisticsRouter = Router();

statisticsRouter.use(ensureAuthenticated);

// statisticsRouter.get('/', async (request, response) => {
//   const statistics = await statisticsRepository.find();

//   return response.json(statistics);
// });

statisticsRouter.post('/', async (request, response) => {

  const { deck, wins, loses, duelist_id } = request.body;

  const createStatistic = container.resolve(CreateStatisticService);

  const statistic = await createStatistic.execute({ deck, wins, loses, duelist_id });

  return response.json(statistic);
});

export default statisticsRouter;
