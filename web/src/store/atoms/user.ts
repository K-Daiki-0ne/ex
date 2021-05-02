import { atom } from 'recoil';

type User = string | string[]

export const userInfoState = atom<User>({
  key: "userInfoState",
  default: null
})