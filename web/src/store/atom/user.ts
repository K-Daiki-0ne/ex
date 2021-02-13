import { atom } from 'recoil';

type User = {
  userID: string,
  username: string,
  password: string,
}

const userInfoState = atom<User>({
  key: "userInfoState",
  default: null
})


export default userInfoState;