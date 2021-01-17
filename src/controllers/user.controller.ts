import User, { IUser } from '../models/user.model';
import { CreateQuery } from 'mongoose';

async function CreateUser({
  email,
  firstName,
  lastName,
  gender,
  address
}: any) {
  const user = await User.create({
    email,
    gender,
    firstName,
    lastName,
    address
  });

  return user;
}

export default {
  CreateUser
};
