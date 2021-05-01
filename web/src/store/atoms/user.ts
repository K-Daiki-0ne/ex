import { atom } from 'recoil';

type User = {
  ID: string,
}

export const userInfoState = atom<User>({
  key: "userInfoState",
  default: null
})