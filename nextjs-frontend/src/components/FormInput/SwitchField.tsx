import * as React from 'react';
import { ReactNode } from 'react';
import { useFormikContext } from 'formik';
import { Grid, ListItem, ListItemText, Switch } from '@mui/material';

const CustomizedSwitch = ({ name }) => {
  const { values, setFieldValue } = useFormikContext();

  return (
    <Switch
      edge="end"
      color="primary"
      onChange={(_e) => setFieldValue(name, +!values?.[name])}
      checked={values?.[name] === 1}
    />
  );
};

export const MySwitchField = ({ key, name, type, ...rest }) => {
  const { label, xsGrid = 12 } = rest;

  return {
    carve(): ReactNode {
      return (
        <Grid item xs={xsGrid} key={key}>
          <ListItem>
            <ListItemText
              primary={label}
              primaryTypographyProps={{
                marginLeft: -1.2,
                variant: 'body1',
                color: 'textPrimary',
                gutterBottom: true,
                noWrap: true
              }}
            />
            <CustomizedSwitch name={name} />
          </ListItem>
        </Grid>
      );
    }
  };
};
