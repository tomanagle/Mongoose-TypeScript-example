import Pet, { IPet } from '../models/pet.model';
import mongoose from 'mongoose';

type TCreateUserInput = {
  owner: mongoose.Schema.Types.ObjectId;
  name: string;
};
async function CreatePet({ owner, name }: TCreateUserInput): Promise<IPet> {
  return await Pet.create({
    owner,
    name
  })
    .then((data: IPet) => {
      return data;
    })
    .catch((error: Error) => {
      throw error;
    });
}

export default {
  CreatePet
};
