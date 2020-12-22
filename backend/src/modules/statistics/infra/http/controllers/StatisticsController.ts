import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateStatisticService from '@modules/statistics/services/CreateStatisticService';

export default class StatisticController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { deck, wins, loses, duelist_id } = request.body;

    const createStatistic = container.resolve(CreateStatisticService);

    const statistic = await createStatistic.execute({ deck, wins, loses, duelist_id });

    return response.json(statistic);
  }
}
