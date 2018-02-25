import { AsyncStorage } from 'react-native';
import Model from './Model';

/**
 * @typedef {Object} Token
 * @prop {String} id
 * @prop {String} userId
 * @prop {String} ttl
 * @prop {String} created
 */

export class Profile extends Model {
  /**
   * @prop {Object} socialNetworks
   */
  static socialNetworks = {
    facebook: 'fb',
    vkontakte: 'vk'
  }

  plural = 'Profiles';

  /**
   * @param {String} socialNetwork - одно из значений Profile.socialNetworks
   * @returns {String} - url авторизации
   */
  getLoginUrlBySocialNetwork(socialNetwork) {
    return `${this.url}/auth/${socialNetwork}?shema=mobile`;
  }

  /**
   * @method login - метод для авторизации пользователя
   * @param {Object} credentials
   * @param {String} credentials.username
   * @param {String} credentials.email
   * @param {String} credentials.password
   * @returns {Promise<Profile>}
   */
  async login(credentials) {
    console.log('login', credentials);
    const result = await this.postRequest(`${this.plural}/login`, credentials);
    console.log('result', result);
    await AsyncStorage.setItem('tokenId', result.id);
    const account = await this.getById(result.userId);
    console.log(account, 'account');
    await AsyncStorage.setItem('userId', account.id.toString());
    return account;
  }

  /**
   * @method
   * @param {Token} Token
   * @returns {Promise}
   */
  setToken(token) {
    return AsyncStorage.setItem('tokenId', token.id.toString());
  }

  /**
   * @method getMyProfile - метод для получение авторизованного пользователя
   * @returns {Promise<Profile>}
   */
  getMyProfile() {
    return this.getRequest(`${this.plural}/my-profile`);
  }

  /**
   * @method logout - метод для закрытия токена
   * @returns {Promise}
   */
  logout() {
    return this.postRequest(`${this.plural}/logout`)
      .then(() => {
        AsyncStorage.removeItem('tokenId');
        AsyncStorage.removeItem('userId');
      });
  }
}

export default new Profile();
