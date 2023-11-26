import * as React from 'react';
import { ReactNode } from 'react';
import { ErrorMessage, Field } from 'formik';
import { CheckboxWithLabel } from 'formik-mui';
import { Grid } from '@mui/material';
import ErrorWrapper from './ErrorWrapper';

const CustomizedCheckbox = ({ name, type, rest }) => {
  const { label } = rest;

  return (
    <>
      <Field
        type={type}
        name={name}
        Label={{ label: label }}
        component={CheckboxWithLabel}
      />

      <ErrorWrapper>
        <ErrorMessage name={name} />
      </ErrorWrapper>
    </>
  );
};

export const MyCheckField = ({ key, name, type, ...rest }) => {
  const { xsGrid = 12 } = rest;

  return {
    carve(): ReactNode {
      return (
        <Grid item xs={xsGrid} key={key}>
          <CustomizedCheckbox name={name} type={type} rest={rest} />
        </Grid>
      );
    }
  };
};
