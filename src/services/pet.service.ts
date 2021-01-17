import { CreateQuery } from 'mongoose';
import Pet, { IPet } from '../models/pet.model';

export function createPet(input: CreateQuery<IPet>) {
  return Pet.create(input);
}
