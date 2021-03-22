import { atom } from 'recoil';

type User = {
  CreatedAt: string,
  DeletedAt: string,
  ID: string,
  UpdatedAt: string,
  password: string,
  username: string,
}

export const userInfoState = atom<User>({
  key: "userInfoState",
  default: null
})