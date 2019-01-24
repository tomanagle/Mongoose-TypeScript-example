import { Request, Response } from 'express';
import User, { IUser } from '../models/user.model';

async function CreateUser(req: Request, res: Response): Promise<Response> {
  const { email, firstName, lastName } = req.body;

  const user = await User.create({
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

  return res.send(user);
}

export default {
  CreateUser
};
