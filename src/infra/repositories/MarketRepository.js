/* eslint-disable no-param-reassign */
import GeocoderClient from "infra/services/GeocoderClient";
import paginateData from "infra/libs/PaginateData";
import BaseRepository from "./BaseRepository";

class MarketRepository extends BaseRepository {
  // eslint-disable-next-line no-useless-constructor
  constructor({ models }) {
    super({ models });
    this.geocoderClient = GeocoderClient;
  }

  async getMarket(query) {
    const { limit, page } = query;
    delete query.page;
    delete query.limit;
    const data = this.find(query);
    const result = [];
    if (data) {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < data.length; i++) {
        const lon = data[i].geometry.coordinates[0];
        const lat = data[i].geometry.coordinates[1];
        // eslint-disable-next-line no-await-in-loop
        data[i].address = await this.geocoderClient.reverse({ lat, lon });
        result.push(data[i]);
        delete result[i].type;
        delete result[i].geometry;
        delete result[i].geometry_name;
      }
    }
    return paginateData(result, limit, page);
  }
}

export default MarketRepository;
