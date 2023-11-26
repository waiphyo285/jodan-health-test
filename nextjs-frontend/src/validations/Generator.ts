import { FormSchemaFactory } from '@/models/validations';
import { CommonFormSchemaFactory } from './Factory';

export function createFormSchemaFactory(): FormSchemaFactory {
  return new CommonFormSchemaFactory();
}

export const schemaFactory: FormSchemaFactory = createFormSchemaFactory();
