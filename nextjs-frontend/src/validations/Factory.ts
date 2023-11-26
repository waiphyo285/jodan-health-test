import * as Yup from 'yup';
import { FormSchemaFactory } from '@/models/validations';
import { formikType } from '@/utilities/constants/application';
import { makeValidateField, makeValidateFieldId } from './Common';

export class CommonFormSchemaFactory implements FormSchemaFactory {
  createSchema(properties: { [key: string]: any }): any {
    let schema = Yup.object();

    Object.entries(properties).forEach(([key, value]) => {
      switch (value.type) {
        case formikType.TABLE_ID:
          schema = schema.shape({
            [key]: makeValidateFieldId(Yup.mixed())
          });
          break;

        case formikType.STRING:
          schema = schema.shape({
            [key]: makeValidateField(Yup.string(), value)
          });
          break;

        case formikType.NUMBER:
          schema = schema.shape({
            [key]: makeValidateField(Yup.number(), value)
          });
          break;

        default:
          break;
      }
    });

    return schema;
  }
}
