import mongoose from 'mongoose'; 
import User from './user.model';

beforeAll(async () => {
   const db = 'mongodb://localhost:27017/test';
   await mongoose.connect(db, { useNewUrlParser: true });
});

afterAll(async () => {
    await mongoose.disconnect();
});

it('Should return true', async () => {   
   await expect(true).toBe(true);
});