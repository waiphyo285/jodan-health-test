import { InitialValuesFactory } from './sources';

export interface Township {
  id: string | number;
  name: string;
  name_mm: string;
  region_id: string;
  active: number;
}

export class TownshipFactory implements InitialValuesFactory {
  createValues(properties: {
    id: string | number;
    name: string;
    name_mm: string;
    region_id: string;
    active: number;
  }): Township {
    return properties;
  }
}

export const newTownshipFactory = new TownshipFactory();
