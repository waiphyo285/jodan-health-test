import * as React from 'react';
import { ReactNode } from 'react';
import dynamic from 'next/dynamic';
import { Grid } from '@mui/material';
import { useFormikContext } from 'formik';
import { rteFormats, rteModules } from '@/utilities/constants/application';

import Text from '../Text';

import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const CustomizedRichText = ({ name, type: _type, rest: _rest }) => {
  const { values, setFieldValue } = useFormikContext();

  return (
    <>
      <ReactQuill
        modules={rteModules}
        formats={rteFormats}
        value={values[name]}
        style={{ margin: '10px 0' }}
        onChange={(value) => setFieldValue(name, value)}
      />
    </>
  );
};

export const MyRichTextField = ({ key, name, type, ...rest }) => {
  const { label, xsGrid = 12 } = rest;

  return {
    carve(): ReactNode {
      return (
        <Grid item xs={xsGrid} key={key}>
          <Text color="black">{label}</Text>
          <CustomizedRichText name={name} type={type} rest={rest} />
        </Grid>
      );
    }
  };
};
