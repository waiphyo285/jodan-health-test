import React, { ReactNode } from 'react';
import { Field, ErrorMessage, useFormikContext } from 'formik';
import { Grid, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import ErrorWrapper from './ErrorWrapper';

const CustomizedSelect = ({ name, options, rest }) => {
  const { errors, touched } = useFormikContext();
  const { label, optionKeyProp, optionLabelProp, fullWidth = true } = rest;

  return (
    <FormControl variant="outlined" fullWidth={fullWidth}>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Field
        name={name}
        as={Select}
        label={label}
        error={Boolean(errors?.[name] && touched?.[name])}
      >
        <MenuItem value="">
          <em>Select one</em>
        </MenuItem>

        {options?.map((option) => (
          <MenuItem key={option[optionKeyProp]} value={option[optionKeyProp]}>
            {option[optionLabelProp]}
          </MenuItem>
        ))}
      </Field>

      <ErrorWrapper>
        <ErrorMessage name={name} />
      </ErrorWrapper>
    </FormControl>
  );
};

export const MySelectField = ({ key, name, options, xsGrid = 12, ...rest }) => {
  return {
    carve(): ReactNode {
      return (
        <Grid item xs={xsGrid} key={key}>
          <CustomizedSelect name={name} options={options} rest={rest} />
        </Grid>
      );
    }
  };
};
