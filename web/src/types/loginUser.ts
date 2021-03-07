export type LoginUserType = {
  data: UserInformationType
}

type UserInformationType = {
  CreatedAt: string;
  DeletedAt: string
  ID: number
  UpdatedAt: string
  password: string
  username: string
}