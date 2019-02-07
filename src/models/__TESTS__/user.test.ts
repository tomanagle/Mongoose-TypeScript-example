import mongoose from 'mongoose';
import User, { IUser } from '../user.model';

describe('User model', () => {
  beforeAll(async () => {
    await mongoose.connect(global.__MONGO_URI__, {
      useNewUrlParser: true
    });
  });

  afterAll(async () => {
    mongoose.connection.close();
  });

  it('Should throw validation errors', () => {
    const user = new User();

    expect(user.validate).toThrow();
  });

  it('Should save a user', async () => {
    const user: IUser = new User({
      firstName: 'Test first name',
      lastName: 'Test last name',
      email: 'test@example.com'
    });
    const spy = jest.spyOn(user, 'save');
    user.save();
    expect(spy).toHaveBeenCalled();
  });
});
