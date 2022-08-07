import { StatusCodes } from "http-status-codes";
import BaseController from "./BaseController";

class MarketController extends BaseController {
  constructor({ marketRepository }) {
    super();
    this.marketRepository = marketRepository;
  }

  async getMarketByQuery(req, res) {
    // const data = this.marketRepository.find(req.query);
    if (!req.query.limit) {
      req.query.limit = 10;
    }
    if (!req.query.page) {
      req.query.page = 1;
    }
    const data = await this.marketRepository.getMarket(req.query);
    this.responseManager
      .getResponseHandler(res)
      .onSuccess(data, "Results retrieved", StatusCodes.OK);
  }
}

export default MarketController;
