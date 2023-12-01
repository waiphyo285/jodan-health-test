import { InitialValuesFactory } from './sources';

export interface Login {
  username: string;
  password: string;
}

export class LoginFactory implements InitialValuesFactory {
  createValues(properties: { username: string; password: string }): Login {
    return properties;
  }
}

export const newLoginFactory = new LoginFactory();
