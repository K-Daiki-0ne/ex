import axios from 'axios';
import { SingleFileAPIType } from '@src/types'

class FileAPI {
  public async getAllFiles(id: string | string[]) {
    const data = await axios.get(`http://localhost:5050/app/all/files?userID=${id}`);
    const response = await data.data;
    return response;
  }

  public async deleteSingleFile(userID: string | string[], fileID: string, fileType: string) {
    try {
      await axios.delete(`http://localhost:5050/app/delete/${fileType}?userID=${userID}&fileID=${fileID}`)     
        .catch(() => console.error('Delete API ...NO'))
      const data = await this.getAllFiles(userID);
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  public async getSingleFile(url: string): Promise<SingleFileAPIType> {
    try {
      const response = await axios.get(url);
      const data = await response.data;
      return data;
    } catch(err) {
      console.error(err);
    }
  }
}

export default new FileAPI();