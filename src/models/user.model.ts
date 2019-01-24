import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  email: string;
  firstName: string;
  lastName: string;
}

const UserSchema: Schema = new Schema({
  email: String,
  firstName: String,
  lastName: String
});

export default mongoose.model<IUser>('User', UserSchema);
