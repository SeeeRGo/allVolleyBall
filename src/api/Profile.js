import { AsyncStorage } from 'react-native';
import Model from './Model';


export default class Profile extends Model {
  plural = 'profiles';

  /**
   * @method login - метод для авторизации пользователя
   * @param {Object} credentials
   * @param {String} credentials.phone
   * @param {String} credentials.password
   * @returns {Promise<Profile>}
   */
  async login(credentials) {
    const result = await this.postRequest(`${this.plural}/login`, credentials);
    await AsyncStorage.setItem('tokenId', result.id);
    const account = await this.getById(result.userId);
    await AsyncStorage.setItem('userId', account.id);
    return account;
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
