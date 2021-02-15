import axios from 'axios';

export const getAllFiles = async (id: string) => {
  const data = await axios.get(`http://localhost:5050/app/all/files?userID=${id}`);
  const response = await data.data;
  return response;
}