import axios from 'axios';

class Get {
  public async getAllFiles(id: string) {
    const data = await axios.get(`http://localhost:5050/app/all/files?userID=${id}`);
    const response = await data.data;
    return response;
  }
}

export default new Get();