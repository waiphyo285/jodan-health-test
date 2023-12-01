import { ComponentPrototype } from './CommonPrototype';
import { schemaFactory } from '@/validations/Generator';
import { ArrayConverter, ObjectConverter } from '@/services/Builder';

export class CommonComponent extends ComponentPrototype {
  constructor(
    moduleName: any,
    pageValues: any,
    modalValues: any,
    initialValues: any,
    formFields: any,
    tableColumns: any,
    searchOptions: any,
    componentFactory: any
  ) {
    super(
      moduleName,
      pageValues,
      modalValues,
      initialValues,
      formFields,
      tableColumns,
      searchOptions,
      componentFactory
    );
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

  makeEndPoint(values: any = ['', 'pages'], isEntry = false) {
    const obj = new ObjectConverter({});
    if (isEntry) {
      for (const element of values) {
        obj.addProperty(element, `/${element}`);
      }
    } else {
      for (const element of values) {
        const key = element == '' ? 'default' : element;
        obj.addProperty(key, `/${this.moduleName}/${element}`);
      }
    }
    return obj.finish();
  }

  makePageValues() {
    return this.makeObject(this.pageValues);
  }

  makeModalValues() {
    return this.makeObject(this.modalValues);
  }

  makeFormFields() {
    return this.makeArray(this.formFields);
  }

  makeTableColumns() {
    return this.makeArray(this.tableColumns);
  }

  makeSearchOptions() {
    return this.makeArray(this.searchOptions);
  }

  makeInitialValues(storeValues: any) {
    const isEditedId = storeValues?.id;
    const modified = this.initialValues.reduce(
      (accumulator: any, current: any) => {
        if (!(isEditedId && current?.disableEdited)) {
          const { key, value } = current;
          accumulator[key] = value;
        }
        return accumulator;
      },
      {}
    );
    return this.componentFactory.createValues(modified);
  }

  makeSchemaValues(storeValues: any) {
    const isEditedId = storeValues?.id;
    const modified = this.initialValues
      .filter((element: any) => element.required)
      .reduce((accumulator: any, current: any) => {
        if (!(isEditedId && current?.disableEdited)) {
          const { key, value, required, ...rest } = current;
          accumulator[key] = rest;
        }
        return accumulator;
      }, {});
    return schemaFactory.createSchema(modified);
  }

  checkIsListView() {
    return Object.keys(this.initialValues).length === 0;
  }
}
