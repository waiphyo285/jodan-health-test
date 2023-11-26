import * as React from 'react';
import { ReactNode } from 'react';
import { DatePicker } from '@mui/lab';
import { TextField, Grid } from '@mui/material';
import { ErrorMessage, Field, useFormikContext } from 'formik';
import { dtFormat } from '@/utilities/constants/application';

import ErrorWrapper from './ErrorWrapper';

const CustomizedDatePicker = ({ name, ...rest }) => {
  const { values, setFieldValue } = useFormikContext();
  const { label, format, fullWidth = true } = rest;

  return (
    <>
      <Field
        name={name}
        label={label}
        component={DatePicker}
        renderInput={(props) => (
          <TextField
            fullWidth={fullWidth}
            InputLabelProps={{ shrink: true }}
            {...props}
          />
        )}
        value={values[name]}
        format={format || dtFormat.DATE_0}
        onChange={(value) => setFieldValue(name, value)}
      />

      <ErrorWrapper>
        <ErrorMessage name={name} />
      </ErrorWrapper>
    </>
  );
};

export const MyDateField = ({ key, name, ...rest }) => {
  const { xsGrid = 12 } = rest;

  return {
    carve(): ReactNode {
      return (
        <Grid item xs={xsGrid} key={key}>
          <CustomizedDatePicker name={name} rest={rest} />
        </Grid>
      );
    }
  };
};
