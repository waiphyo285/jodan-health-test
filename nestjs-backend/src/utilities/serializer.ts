import { isArray, isObject } from 'class-validator';
import { MAPPING_TYPE } from './constant';

export class Serializer {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  public static createResponse(optionName: string, data: any) {
    switch (true) {
      case isObject(data):
        return this.serialize(optionName, data);

      case isArray(data):
        return data.map((obj: any) => this.serialize(optionName, obj));

      default:
        return data;
    }
  }

  public static serialize(optionName: string, data: any) {
    switch (optionName) {
      case MAPPING_TYPE.systemUser:
        delete data.password;
        return data;

      default:
        return data;
    }
  }
}
