import { InitialValuesFactory } from './sources';

export interface User {
  id: string | number;
  name: string;
  phone: string;
  username: string;
  password?: string;
  role_id: string;
}

export class UserFactory implements InitialValuesFactory {
  createValues(properties: {
    id: string | number;
    name: string;
    phone: string;
    username: string;
    password?: string;
    role_id: string;
  }): User {
    return properties;
  }
}

export const newUserFactory = new UserFactory();
