import User, { IUser } from '../models/user.model';
import { CreateQuery } from 'mongoose';

async function CreateUser({
  email,
  firstName,
  lastName,
  gender,
  address
}: CreateQuery<IUser>): Promise<IUser> {
  return User.create({
    email,
    gender,
    firstName,
    lastName,
    address
  })
    .then((data: IUser) => {
      return data;
    })
    .catch((error: Error) => {
      throw error;
    });
}

export default {
  CreateUser
};
