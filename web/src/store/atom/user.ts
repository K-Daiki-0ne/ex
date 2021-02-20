import { atom } from 'recoil';

type User = {
  userID: string,
  username: string,
  password: string,
}

export const userInfoState = atom<User>({
  key: "userInfoState",
  default: null
})