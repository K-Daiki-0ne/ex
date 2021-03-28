import axios from 'axios';

class FileAPI {
  public async getAllFiles(id: string | string[]) {
    const data = await axios.get(`http://localhost:5050/app/all/files?userID=${id}`);
    const response = await data.data;
    return response;
  }
}

export default new FileAPI();