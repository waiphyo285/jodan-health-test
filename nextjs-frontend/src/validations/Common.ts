import * as Yup from 'yup';
import { isStringOrNumber } from '@/utilities/Helpers';
import { yupMessage } from '@/utilities/constants/application';

const REQUIRED = yupMessage.DEFAULT;
const INVALID_ID = yupMessage.INVALID_ID;
const INVALID_PATTERN = yupMessage.INVALID;

export const minMessage = (value: number) =>
  `This must be at least ${value} characters`;

export const maxMessage = (value: number) =>
  `This must be at most ${value} characters`;

export const matchMessage = (value: string) =>
  `This field must match with ${value}`;

export const makeValidateField = (current: any, value: any) => {
  let validateField = current.required(value.requiredMessage || REQUIRED);

  if (value.min)
    validateField = validateField.min(
      value.min,
      value.minMessage || minMessage(value.min)
    );

  if (value.max)
    validateField = validateField.max(
      value.max,
      value.maxMessage || maxMessage(value.max)
    );

  if (value.pattern)
    validateField = validateField.matches(
      value.pattern,
      value.patternMessage || INVALID_PATTERN
    );

  if (value.matchWith)
    validateField = validateField.oneOf(
      [Yup.ref(value.matchWith), null],
      matchMessage(value.matchWith)
    );

  return validateField;
};

export const makeValidateFieldId = (current: any) => {
  return current
    .required(REQUIRED)
    .test('isStrOrNum', INVALID_ID, (value: any) => isStringOrNumber(value));
};
