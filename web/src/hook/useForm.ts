import React, { useState } from 'react';

type ReturnDataType = {
  name: string;
  pass: string;
  isName: boolean;
  isPass: boolean;
}

  /**
   * フォームのバリデーション
   * @param {string} inputName
   * @param {string} inputPassword
   * @param { boolean } mode <- true: Login, false: Register
   * @returns {  } 
   */
export const useForm = (inputName: string, inputPassword: string, mode: boolean ): ReturnDataType => {
  const [name, setName]     = useState<string>('ユーザーネームを入力してください');
  const [pass, setPass]     = useState<string>('パスワードを入力してください');
  const [isName, setIsName] = useState<boolean>(false);
  const [isPass, setIsPass] = useState<boolean>(false);

  if(inputName !== '' && inputPassword !== '') {
    if(mode) {
      setName('登録されていないユーザーネームです');
      setPass('登録されていないパスワードです')  
    } else {
      setName('登録できないユーザーネームです');
      setPass('登録できなパスワードです');
    }
    setIsName(true);
    setIsPass(true);
  }

  if(inputName === '' && inputPassword === '') {
    setName('ユーザーネームを入力してください!');
    setPass('パスワードを入力してください!')
    setIsName(true)
    setIsPass(true)
  }

  if (inputName == ''){
    setName('ユーザーネームを入力してください');
    setIsName(true)
  }
  
  if (inputPassword == ''){
    setPass('パスワードを入力してください!')
    setIsPass(true)
  }

  return {
    name,
    pass,
    isName,
    isPass
  };

}