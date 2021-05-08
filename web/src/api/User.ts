import axios from 'axios';
import { LoginUserType } from '@src/types/loginUser';

class User {

  /**
   * ログインをおこなうためのメソッド
   *
   * @param {string} name
   * @param {string} pass
   * @return {object}
   * @memberof User
   */
  public async login(name: string, pass: string): Promise<LoginUserType> {
    try {
      const data = await axios.get(`http://localhost:4000/auth/login/${name}/${pass}`);
      const response = await data.data
      return response;
    } catch (err) {
      console.error(err) 
      return err
    }
  };


  /**
   * 登録をおこなうためのメソッド
   *
   * @param {string} name
   * @param {string} password
   * @return {object}
   * @memberof User
   */
  public async register(name: string, password: string) {
    try {
      const data = await axios.post(`http://localhost:4000/auth/register/${name}/${password}`);
      return data.data;
    } catch(err) {
      return err;
    }
  };
}

export default new User();