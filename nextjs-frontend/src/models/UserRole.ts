import { InitialValuesFactory } from './sources';

export interface UserRole {
  id: string | number;
  name: string;
  level: number;
}

export class UserRoleFactory implements InitialValuesFactory {
  createValues(properties: {
    id: string | number;
    name: string;
    level: number;
  }): UserRole {
    return properties;
  }
}

export const newUserRoleFactory = new UserRoleFactory();
