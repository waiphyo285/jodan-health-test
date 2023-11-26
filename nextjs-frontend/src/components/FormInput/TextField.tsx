import * as React from 'react';
import { ReactNode } from 'react';
import { Field } from 'formik';
import { TextField } from 'formik-mui';
import { Grid } from '@mui/material';

export const MyTextField = ({ key, name, type, disabled = false, ...rest }) => {
  const { label, xsGrid = 12, fullWidth = true } = rest;

  return {
    carve(): ReactNode {
      return (
        <Grid item xs={xsGrid} key={key}>
          <Field
            type={type}
            name={name}
            label={label}
            component={TextField}
            fullWidth={fullWidth}
            disabled={disabled}
          />
        </Grid>
      );
    }
  };
};
