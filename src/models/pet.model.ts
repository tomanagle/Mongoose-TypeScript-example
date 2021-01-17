import { prop, getModelForClass } from '@typegoose/typegoose';
import { IUser } from './user.model';

export class IPet {
  @prop()
  public name: string;

  @prop({ type: () => [String] })
  public owner: IUser['_id'];
}

export default getModelForClass(IPet);
