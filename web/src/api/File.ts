import axios from 'axios';

class FileAPI {
  public async getAllFiles(id: string | string[]) {
    const data = await axios.get(`http://localhost:5050/app/all/files?userID=${id}`);
    const response = await data.data;
    return response;
  }

  public async deleteSingleFile(userID: string | string[], fileID: string, fileType: string) {
    try {
      await axios.delete(`http://localhost:5050/app/delete/${fileType}?userID=${userID}&fileID=${fileID}`)     
      .then(() => console.log('aaa'))
      .catch(() => console.error('Delete API ...NO'))
      const data = await this.getAllFiles(userID);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}

export default new FileAPI();