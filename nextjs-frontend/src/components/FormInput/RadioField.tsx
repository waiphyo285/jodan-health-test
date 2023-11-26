import * as React from 'react';
import { ReactNode } from 'react';
import { RadioGroup } from 'formik-mui';
import { ErrorMessage, Field, useFormikContext } from 'formik';
import { FormControlLabel, Grid, Radio } from '@mui/material';
import ErrorWrapper from './ErrorWrapper';
import Text from '../Text';

const CustomizedRadiobox = ({ name, options, rest: _rest }) => {
  const { values } = useFormikContext();

  return (
    <>
      <Field name={name} value={values[name]} component={RadioGroup}>
        <Grid container direction="row">
          {options.map((option, idx) => {
            return (
              <Grid item key={idx} md={3} sm={12}>
                <FormControlLabel
                  key={idx}
                  control={<Radio />}
                  value={option.value}
                  label={option.label}
                />
              </Grid>
            );
          })}
        </Grid>
      </Field>

      <ErrorWrapper>
        <ErrorMessage name={name} />
      </ErrorWrapper>
    </>
  );
};

export const MyRadioField = ({ key, name, options, ...rest }) => {
  const { label, xsGrid = 12 } = rest;

  return {
    carve(): ReactNode {
      return (
        <Grid item xs={xsGrid} key={key}>
          <Text color="black">{label}</Text>
          <CustomizedRadiobox name={name} options={options} rest={rest} />
        </Grid>
      );
    }
  };
};
