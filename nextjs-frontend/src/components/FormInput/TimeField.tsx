import * as React from 'react';
import { ReactNode } from 'react';
import { TimePicker } from '@mui/lab';
import { TextField, Grid } from '@mui/material';
import { ErrorMessage, Field, useFormikContext } from 'formik';

import ErrorWrapper from './ErrorWrapper';

const CustomizedTimePicker = ({ name, ...rest }) => {
  const { values, setFieldValue } = useFormikContext();
  const { label, fullWidth = true } = rest;

  return (
    <>
      <Field
        name={name}
        label={label}
        component={TimePicker}
        renderInput={(props) => (
          <TextField
            fullWidth={fullWidth}
            InputLabelProps={{ shrink: true }}
            {...props}
          />
        )}
        value={values[name]}
        onChange={(value) => setFieldValue(name, value)}
      />

      <ErrorWrapper>
        <ErrorMessage name={name} />
      </ErrorWrapper>
    </>
  );
};

export const MyTimeField = ({ key, name, ...rest }) => {
  const { xsGrid = 12 } = rest;

  return {
    carve(): ReactNode {
      return (
        <Grid item xs={xsGrid} key={key}>
          <CustomizedTimePicker name={name} rest={rest} />
        </Grid>
      );
    }
  };
};
