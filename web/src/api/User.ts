import axios from 'axios';

type Login = {
  id: string;
  name: string;
}

class User {
  public async login(name: string, pass: string): Promise<Login> {
    try {
      const data: Login = await axios.get(`http://localhost:4000/auth/login/${name}/${pass}`);
      return data;
    } catch (err) {
      console.error(err) 
    }
  };

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