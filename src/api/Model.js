import axios from 'axios';
import { AsyncStorage } from 'react-native';

export default class Model {
  static init() {
    return new this();
  }

  /** @prop {String} plural - значение plural на loopback */
  plural = '';

  /** @prop {String} apiUrl - url сервера */
  apiUrl = 'http://192.168.1.108:3000/api';

  /**
   * @method find - получение всех записей модели
   * @param {Object} filter - loopback фильтры
   * @return {Promise}
   */
  find(filter) {
    return this.getRequest(this.plural, { filter });
  }

  /**
   * @method create - создание новой записи модели
   * @param {Object|Array<Object>} items - данные для новой или новых записей
   * @return {Promise}
   */
  create(items) {
    return this.postRequest(this.plural, items);
  }

  /**
   * @method getById - получение записи модели по id
   * @param {String|Number} id - id модели
   * @param {Object} filter - looback фильтры
   * @return {Promise}
   */
  getById(id, filter) {
    return this.getRequest(`${this.plural}/${id}`, { filter });
  }

  /**
   * @method updateById - изменение записи модели по id
   * @param {String|Number} id - id объекта
   * @param {Object} data - новые данные
   * @return {Promise}
   */
  updateById(id, data) {
    return this.patchRequest(`${this.plural}/${id}`, data);
  }

  /**
   * @method findOne - получение одной записи
   * @param {Object} filter - loopback фильтры
   * @return {Promise}
   */
  findOne(filter) {
    return this.getRequest(`${this.plural}`, { filter: { ...filter, limit: 1 } })
      .then((result) => result[0] || null);
  }

  /**
   * @method delete - удаление записи по id
   * @param {String|Number} id - id объекта
   * @return {Promise}
   */
  delete(id) {
    return axios.delete(`${this.apiUrl}/${this.plural}/${id}`);
  }

  /**
   * @method delete - удаление записи по id
   * @param {Object} where - loopback фильтр where
   * @return {Promise<Number>}
   */
  count(where) {
    return this.getRequest(`${this.plural}/count`, { where });
  }

  async getRequest(url, filter) {
    const token = await AsyncStorage.getItem('tokenId');
    const config = {
      params: filter,
      headers: {
        Authorization: token
      }
    };
    return axios.get(`${this.apiUrl}/${url}`, config)
      .then((response) => response.data);
  }

  async postRequest(url, data) {
    const token = await AsyncStorage.getItem('tokenId');
    const config = {
      headers: {
        Authorization: token
      }
    };
    console.log('async postRequest(url, data)', url, data);
    return axios.post(`${this.apiUrl}/${url}`, data, config).then((response) => response.data);
  }

  async patchRequest(url, data) {
    const token = await AsyncStorage.getItem('tokenId');
    const config = {
      headers: {
        Authorization: token
      }
    };
    return axios.patch(`${this.apiUrl}/${url}`, data, config).then((response) => response.data);
  }
}
