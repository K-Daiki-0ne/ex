import axios from 'axios';


/**
 * @description post your information for Backend
 * @param { string } name UserName
 * @param { string } password UserPassword
 * @returns { object }
 */
export async function postUserInformation(name: string, password: string):Promise<object>{
  try {
    const data = await axios.post(`http://localhost:4000/auth/register/${name}/${password}`);
    return data.data;
  } catch(err) {
    return err;
  }
}