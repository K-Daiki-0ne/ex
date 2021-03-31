import axios from 'axios';

class FileAPI {
  public async getAllFiles(id: string | string[]) {
    const data = await axios.get(`http://localhost:5050/app/all/files?userID=${id}`);
    const response = await data.data;
    return response;
  }

  public async deleteSingleFile(userID: string, fileID: string, fileType: string) {
    try {
      axios.delete(`http://localhost:5050/app/delete/${fileType}?userID=${userID}&fileID=${fileID}`)
      .then(()  => console.log('Delete API ...OK'))
      .catch(() => console.error('Delete API ...NO'))       
    } catch (error) {
      console.error(error);
    }
  }
}

export default new FileAPI();