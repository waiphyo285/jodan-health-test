import { InitialValuesFactory } from './sources';

export interface EditUser {
  id: string | number;
  name: string;
  phone: string;
  address: string;
  profile_img?: string;
}

export class EditUserFactory implements InitialValuesFactory {
  createValues(properties: {
    id: string | number;
    name: string;
    phone: string;
    address: string;
    profile_img?: string;
  }): EditUser {
    return properties;
  }
}

export const newEditUserFactory = new EditUserFactory();
