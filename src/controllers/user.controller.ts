import User, { IUser } from '../models/user.model';

async function CreateUser({
  email,
  firstName,
  lastName
}: {
  email: string;
  firstName: string;
  lastName: string;
}): Promise<IUser> {
  return User.create({
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
