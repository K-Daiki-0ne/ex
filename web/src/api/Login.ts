import axios from 'axios';

type Login = {
  id: string;
  name: string;
}

/**
 * @description Get user information for Backend
 * @param { string } name Username
 * @param { string } pass UserPassword
 * @returns { object } { id: userID, name: UserName }
 */

export async function getUserInformation(name: string, pass: string): Promise<Login> {
  const data: Login = await axios.get(`http://localhost:4000/auth/login/${name}/${pass}`);
  return data;
}