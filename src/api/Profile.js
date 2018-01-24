import { AsyncStorage } from 'react-native';
import Model from './Model';


export default class Profile extends Model {
  plural = 'Profiles';

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
