import mongodb from 'mongodb';

let connection: any;
let db: any;

describe('User model', () => {
  beforeAll(async () => {
    console.log('global.__MONGO_URI__', global.__MONGO_URI__);
    console.log('global.__MONGO_DB_NAME__', global.__MONGO_DB_NAME__);
    connection = await mongodb.connect(global.__MONGO_URI__, {
      useNewUrlParser: true
    });
    db = await connection.db(global.__MONGO_DB_NAME__);
  });

  afterAll(async () => {
    await connection.close();
    await db.close();
  });

  it('Should fail', () => {
    expect(true).toBe(true);
  });
});
