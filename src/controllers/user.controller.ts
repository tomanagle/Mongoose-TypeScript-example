import { Request, Response } from 'express';
import User, { IUser } from '../models/user.model';

type TCreateUserInput = {
  email: string;
  firstName: string;
  lastName: string;
};
async function CreateUser({
  email,
  firstName,
  lastName
}: TCreateUserInput): Promise<IUser> {
  return await User.create({
    email,
    firstName,
    lastName
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
