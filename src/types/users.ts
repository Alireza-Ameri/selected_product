import { IAddress } from "./commons";

export interface IUser {
  address: IAddress;
  email: string;
  id: number;
  name: {
    firstname: string;
    lastname: string;
  };
  password: string;
  phone: string;
  username: string;
}
