import {
  MyCheckField,
  MyRadioField,
  MySelectField,
  MySwitchField,
  MyUploadField,
  MyRichTextField,
  MyTextField,
  MyDateField,
  MyTimeField,
  MyUnknown
} from '@/components/FormInput';
import { fieldType } from './constants/application';

export const generateComponent = (fields: any[], isEditedForm = false) => {
  return fields.map((field, key) => {
    const { type, name, disableEdited, ...rest } = field;

    if (disableEdited === isEditedForm) {
      return MyUnknown({ key }).carve();
    }

    switch (type) {
      case fieldType.TEXT:
      case fieldType.EMAIL:
      case fieldType.NUMBER:
        return MyTextField({ key, type, name, ...rest }).carve();

      case fieldType.SELECT:
        return MySelectField({ key, type, name, ...rest }).carve();

      case fieldType.RICHTEXT:
        return MyRichTextField({ key, type, name, ...rest }).carve();

      case fieldType.CHECKBOX:
        return MyCheckField({ key, type, name, ...rest }).carve();

      case fieldType.RADIOBOX:
        return MyRadioField({ key, type, name, ...rest }).carve();

      case fieldType.SWITCH:
        return MySwitchField({ key, type, name, ...rest }).carve();

      case fieldType.DATE:
        return MyDateField({ key, type, name, ...rest }).carve();

      case fieldType.TIME:
        return MyTimeField({ key, type, name, ...rest }).carve();

      case fieldType.FILE:
        return MyUploadField({ key, type, name, ...rest }).carve();

      default:
        return MyUnknown({ key }).carve();
    }
  });
};
