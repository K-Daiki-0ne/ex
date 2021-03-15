import { atom } from 'recoil';

type RegisterUserType = {
  data: string,
}

export const registerUserState = atom<RegisterUserType>({
  key: "registerUserState",
  default: null
});