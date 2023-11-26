import { InitialValuesFactory } from './initialValues';

export interface Region {
  id: string | number;
  name: string;
  name_mm: string;
  active: number;
}

export class RegionFactory implements InitialValuesFactory {
  createValues(properties: {
    id: string | number;
    name: string;
    name_mm: string;
    active: number;
  }): Region {
    return properties;
  }
}

export const newRegionFactory = new RegionFactory();
