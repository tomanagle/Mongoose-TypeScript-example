import Controller from '../controllers/user.controller';
import { TRoutesInput } from '../types/routes';
export default ({ app }: TRoutesInput) => {
  app.post('/api/user', Controller.CreateUser);
};
