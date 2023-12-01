import { useSelector } from 'react-redux';
import { useCallback, useEffect, useRef } from 'react';
import { Grid, Card, CardContent, Box } from '@mui/material';

import SidebarLayout from '@/layouts/SidebarLayout';
import PageWrapper from '@/components/PageWrapper';

import { AppState, store } from '@/redux/store';
import { getListData } from '@/redux/list/common.slice';
import { createData } from '@/redux/entry/common.slice';

import FormPages from '@/contents/Common/PageForm';
import generateValues from '@/sources/pages/ChangePassword';

const ENDPOINT = ['', 'change_password'];

function ChangePasswordPage() {
  const formRef = useRef(null);

  const storeKey = generateValues.makeStoreKey();
  const endPoint = generateValues.makeEndPoint(ENDPOINT);

  const formFields = generateValues.makeFormFields();
  const pageValues = generateValues.makePageValues();

  const initialValues = generateValues.makeInitialValues({});
  const validationSchema = generateValues.makeSchemaValues({});

  const { data: rows } = useSelector(
    (state: AppState) => state?.commonList?.[storeKey]
  );

  const memoizedList = useCallback(
    () =>
      store?.dispatch(
        getListData({
          url: endPoint.default,
          storeKey: storeKey
        })
      ),
    [store?.dispatch]
  );

  const handleFormSubmit = (values: any) => {
    store?.dispatch(
      createData({
        data: values,
        storeKey: storeKey,
        url: endPoint.change_password
      })
    );
  };

  useEffect(() => memoizedList(), [memoizedList]);

  const storeValues = { ...initialValues, ...rows?.[0] };

  return (
    <PageWrapper pageValues={pageValues} createAction={<></>}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Box sx={{ p: 2 }}>
              {/* {rows.length > 0 && ( */}
              <FormPages
                formRef={formRef}
                formFields={formFields}
                pageValues={pageValues}
                initialValues={storeValues}
                validationSchema={validationSchema}
                handleFormSubmit={handleFormSubmit}
              />
              {/* )} */}
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </PageWrapper>
  );
}

ChangePasswordPage.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default ChangePasswordPage;
