import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './user.model';

export interface IPet extends Document {
  name: string;
  owner: IUser['_id'];
}

const PetSchema: Schema = new Schema({
  name: { type: String, required: true },
  owner: { type: Schema.Types.ObjectId, required: true }
});

export default mongoose.model<IPet>('Pet', PetSchema);
