import axios from 'axios';

/**
 * @description post your information for Backend
 * @param name UserName
 * @param password UserPassword
 * @returns { object }
 */
export async function postUserInformation(name: string, password: string):Promise<string>{
  try {
    const data: string = await axios.post(`http://localhost:4000/auth/register/${name}/${password}`);
    return data;
  } catch(err) {
    return err;
  }
}