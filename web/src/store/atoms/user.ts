import { atom } from 'recoil';

type User = string | string[]

// ログインしたユーザー情報を格納する
export const userInfoState = atom<User>({
  key: "userInfoState",
  default: null
})