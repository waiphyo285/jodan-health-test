export class ComponentPrototype {
  protected moduleName: string = '';
  protected pageValues: any = {};
  protected modalValues: any = {};
  protected initialValues: any = [];

  protected formFields: any = [];
  protected tableColumns: any = [];
  protected searchOptions: any = [];

  protected componentFactory: any;

  protected makeObject(_values: any): any {
    throw new Error('Not implemented method!');
  }

  protected makeArray(_values: any): any {
    throw new Error('Not implemented method!');
  }

  constructor(
    moduleName: string,
    pageValues: any,
    modalValues: any,
    initialValues: any,
    formFields: any,
    tableColumns: any,
    searchOptions: any,
    componentFactory: any
  ) {
    this.moduleName = moduleName;
    this.pageValues = pageValues;
    this.modalValues = modalValues;
    this.initialValues = initialValues;

    this.formFields = formFields;
    this.tableColumns = tableColumns;
    this.searchOptions = searchOptions;

    this.componentFactory = componentFactory;
  }
}
