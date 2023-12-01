import { AuthPrototype } from './AuthPrototype';
import { schemaFactory } from '@/validations/Generator';
import { ArrayConverter, ObjectConverter } from '@/services/Builder';

export class AuthComponent extends AuthPrototype {
  constructor(
    moduleName: string,
    pageValues: any,
    alertValues: any,
    initialValues: any,
    componentFactory: any
  ) {
    super(moduleName, pageValues, alertValues, initialValues, componentFactory);
  }

  makeObject(values: any) {
    const obj = new ObjectConverter({});
    for (const element of values) {
      obj.addProperty(element.key, element.value);
    }
    return obj.finish();
  }

  makeArray(values: any) {
    const arr = new ArrayConverter([]);
    for (const element of values) {
      arr.addElement(element);
    }
    return arr.finish();
  }

  makeStoreKey() {
    return this.moduleName;
  }

  makeEndPoint() {
    return this.makeObject([
      { key: 'default', value: `/${this.moduleName}/system-user-signin` },
      { key: 'guard', value: `/${this.moduleName}/guard-login` }
    ]);
  }

  makePageValues() {
    return this.makeObject(this.pageValues);
  }

  makeAlertValues() {
    return this.makeObject(this.alertValues);
  }

  makeInitialValues() {
    const modified = this.initialValues.reduce(
      (accumulator: any, current: any) => {
        const { key, value } = current;
        accumulator[key] = value;
        return accumulator;
      },
      {}
    );
    return this.componentFactory.createValues(modified);
  }

  makeSchemaValues() {
    const modified = this.initialValues
      .filter((element: any) => element.required)
      .reduce((accumulator: any, current: any) => {
        const { key, value, required, ...rest } = current;
        accumulator[key] = rest;
        return accumulator;
      }, {});
    return schemaFactory.createSchema(modified);
  }
}
