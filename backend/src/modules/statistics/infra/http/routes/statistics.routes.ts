import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import StatisticsController from '@modules/statistics/infra/http/controllers/StatisticsController';

const statisticsRouter = Router();
const statisticsController = new StatisticsController();

statisticsRouter.use(ensureAuthenticated);

// statisticsRouter.get('/', async (request, response) => {
//   const statistics = await statisticsRepository.find();

//   return response.json(statistics);
// });

statisticsRouter.post('/', statisticsController.create);

export default statisticsRouter;
