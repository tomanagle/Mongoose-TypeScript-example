import mongodb from 'mongodb';
import User, { IUser } from '../user.model';
let connection: any;
let db: any;

describe('User model', () => {
  beforeAll(async () => {
    connection = await mongodb.connect(global.__MONGO_URI__, {
      useNewUrlParser: true
    });
    db = await connection.db(global.__MONGO_DB_NAME__);
  });

  afterAll(async () => {
    await connection.close();
    await db.close();
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
