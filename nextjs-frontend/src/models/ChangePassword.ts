import { InitialValuesFactory } from './sources';

export interface ChangePassword {
  id: string | number;
  username: string;
  password: string;
  new_password?: string;
}

export class ChangePasswordFactory implements InitialValuesFactory {
  createValues(properties: {
    id: string | number;
    username: string;
    password: string;
    new_password?: string;
  }): ChangePassword {
    return properties;
  }
}

export const newChangePasswordFactory = new ChangePasswordFactory();
