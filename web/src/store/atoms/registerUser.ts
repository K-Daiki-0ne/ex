import { atom } from 'recoil';

type RegisterUserType = {
  data: string,
}

// 登録されたユーザー情報を格納する
export const registerUserState = atom<RegisterUserType>({
  key: "registerUserState",
  default: null
});