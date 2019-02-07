import mongodb from 'mongodb';
import User from '../user.model';
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
});
