import axios from 'axios';
import { SingleFileAPIType } from '@src/types'

class FileAPI {

  /**
   * ユーザーが投稿したファイルを全件取得するためのメソッド
   *
   * @param {(string | string[])} id
   * @return {object} 
   * @memberof FileAPI
   */
  public async getAllFiles(id: string | string[]) {
    const data = await axios.get(`http://localhost:5050/app/all/files?userID=${id}`);
    const response = await data.data;
    return response;
  }

  /**
   * ファイルを削除するメソッド
   *
   * @param {(string | string[])} userID
   * @param {string} fileID
   * @param {string} fileType
   * @returns {object} 
   * @memberof FileAPI
   */
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

  /**
   * ファイルを一件のみ取得するためのメソッド
   *
   * @param {string} url
   * @returns {object} 
   * @memberof FileAPI
   */
  public async getSingleFile(url: string): Promise<SingleFileAPIType> {
    try {
      const response = await axios.get(url);
      const data = await response.data;
      return data;
    } catch(err) {
      console.error(err);
    }
  }

  /**
   * ファイルを更新するためのメソッド
   *
   * @param {string} url
   * @return {object} 
   * @memberof FileAPI
   */
  public async updateSingleFile(url: string): Promise<void> {
    try {
      await axios.put(url)
        .catch((err) => console.error(err))
    } catch (err) {
      console.error(err)
    }
  }
}

export default new FileAPI();