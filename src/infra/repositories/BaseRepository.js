/* eslint-disable class-methods-use-this */
// const Model = require("../database/data");

class BaseRepository {
  /**
   * @constructor
   * @param {*} param0
   */
  constructor({ models }) {
    this.Collection = this.stringifyNull(models);
  }

  async count() {
    return this.Collection.estimatedDocumentCount();
  }

  stringifyNull(datas) {
    const data = datas;
    data.forEach((dt) => {
      Object.keys(dt.properties).forEach((dat) => {
        if (dt.properties[dat] == null) {
          // eslint-disable-next-line no-param-reassign
          dt.properties[dat] = "null";
        }
      });
    });
    return data;
  }

  /* Full list of option - https://mongoosejs.com/docs/api.html#query_Query-setOptions */

  /**
   *
   * @param {*} query
   * @param {*} projection
   * @param {*} options
   * @param {*} multiple
   * @returns {Document}
   * @memberof BaseRepository
   */
  find(query = {}) {
    let results = JSON.parse(JSON.stringify(this.Collection));
    // const data = this.Collection;
    Object.keys(query).forEach((qry) => {
      results = results.filter((feature) => {
        return feature.properties[qry]
          .toLowerCase()
          .includes(query[qry].toLowerCase());
      });
    });
    return results;
  }

  /**
   *
   * @param {*} documentId
   * @param {*} projection
   * @param {*} options
   * @returns {Document}
   * @memberof BaseRepository
   */
  findById(documentId) {
    let results = JSON.parse(JSON.stringify(this.Collection));
    results = results.filter((feature) => {
      return feature.id === documentId;
    });
    return results;
  }

  /**
   *
   * @param {*} query
   * @param {*} projection
   * @param {*} options
   * @returns {Document}
   * @memberof BaseRepository
   */
  findOne(query = {}) {
    let results;
    const data = this.Collection;
    Object.keys(query).forEach((qry) => {
      results = data.filter((feature) => {
        return feature.properties[qry]
          .toLowerCase()
          .includes(query[qry].toLowerCase());
      });
    });
    return results[0];
  }
}

export default BaseRepository;
