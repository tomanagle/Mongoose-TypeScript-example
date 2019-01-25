import mongoose, { Schema, Document } from 'mongoose';

export interface IPet extends Document {
  name: string;
  owner: mongoose.Schema.Types.ObjectId;
}

const PetSchema: Schema = new Schema({
  name: { type: String, required: true },
  owner: { type: Schema.Types.ObjectId, required: true }
});

export default mongoose.model<IPet>('Pet', PetSchema);
