export class AuthPrototype {
  protected moduleName: string = '';
  protected pageValues: any = {};
  protected alertValues: any = {};
  protected initialValues: any = [];

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
    alertValues: any,
    initialValues: any,
    componentFactory: any
  ) {
    this.moduleName = moduleName;
    this.pageValues = pageValues;
    this.alertValues = alertValues;
    this.initialValues = initialValues;

    this.componentFactory = componentFactory;
  }
}
