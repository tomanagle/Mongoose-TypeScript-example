import mongoose from 'mongoose';
import Controller from '../user.controller';

describe('User controller', () => {
  beforeAll(async () => {
    await mongoose.connect(global.__MONGO_URI__, {
      useNewUrlParser: true
    });
  });

  afterAll(async () => {
    mongoose.connection.close();
  });
  it('Should create a user', async () => {
    const email = 'text@example.com';

    const user = await Controller.CreateUser({
      email,
      firstName: 'Test first name',
      lastName: 'Test last name'
    });

    expect(user.email).toEqual(email);
  });

  it('Should enforce the gender ennum', async () => {
    try {
      await Controller.CreateUser({
        email: 'text@example.com',
        firstName: 'Test first name',
        lastName: 'Test last name',
        // @ts-ignore
        gender: 'not a gender'
      });
    } catch (e) {
      expect(e.message).toBe(
        'User validation failed: gender: `not a gender` is not a valid enum value for path `gender`.'
      );
    }
  });
});
