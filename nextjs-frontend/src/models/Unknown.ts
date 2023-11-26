import { InitialValuesFactory } from './initialValues';

export interface Unknown {}

export class UnknownFactory implements InitialValuesFactory {
  createValues(properties: {}): Unknown {
    return properties;
  }
}

export const newUnknownFactory = new UnknownFactory();
