import Pet, { IPet } from '../models/pet.model';
import { IUser } from '../models/user.model';

interface ICreatePetInput {
  owner: IUser['_id'];
  name: IPet['name'];
}

async function CreatePet({ owner, name }: ICreatePetInput): Promise<IPet> {
  const pet = await Pet.create({
    owner,
    name
  });

  pet.own;

  return pet;
}

export default {
  CreatePet
};
