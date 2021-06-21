import { Model } from './../../shared/interfaces/model';
import { UserInterface } from './../../shared/interfaces/user-interface';
export class User implements UserInterface {
  public id!: number;
  public username!: string;
  public lastName!: string;
  public firstName!: string;
  public email!: string;
}
