import * as React from 'react';
import { Grid } from '@mui/material';
import { Formik, Form } from 'formik';
import { generateComponent } from '@/utilities/Generator';

function FormikEntryForm({
  innerRef,
  formFields,
  initialValues,
  validationSchema,
  handleFormSubmit
}) {
  return (
    <Formik
      innerRef={innerRef}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => handleFormSubmit && handleFormSubmit(values)}
    >
      {({}) => (
        <Form>
          <Grid container spacing={2}>
            {generateComponent(formFields)}{' '}
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

export default FormikEntryForm;
