import mongoose from 'mongoose';
import Controller from '../user.controller';

describe('User controller', async () => {
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
});
