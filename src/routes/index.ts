import { Application } from 'express';
import UserRoutes from './user.rotes';

import { TRoutesInput } from '../types/routes';
export default ({ app }: TRoutesInput) => {
  console.log('Initalizing routes...');
  UserRoutes({ app });
};
