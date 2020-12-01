import axios from 'axios';

type Register = {
  id: string,
  name: string,
}

/**
 * @description post your information for Backend
 * @param name UserName
 * @param password UserPassword
 * @returns { object }
 */
export async function postUserInformation(name: string, password: string):Promise<Register>{
  const data: Register = await axios.get(`http://localhost:4000/auth/login/${name}/${password}`);
  return data;
}