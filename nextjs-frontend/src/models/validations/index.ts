export interface FormSchemaFactory {
  createSchema(properties: { [key: string]: any }): any;
}
