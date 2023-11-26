import { useCallback, useEffect } from 'react';
import { batch, useSelector } from 'react-redux';
import { GridColDef } from '@mui/x-data-grid-pro';
import { Grid } from '@mui/material';

import SidebarLayout from '@/layouts/SidebarLayout';
import DataTable from '@/contents/Common/DataTable';

import { AddButton } from '@/components/Buttons';
import PageWrapper from '@/components/PageWrapper';

import { getListData } from '@/redux/config.slice';
import { AppState, store } from '@/redux/store';
import { handleToggleModal } from '@/utilities/Handlers';

import generateValues from '@/initialValues/pages/User';
import userRoleValues from '@/initialValues/pages/UserRole';
import generateTableCols from '@/configs/GenerateTableCols';

function UserPage() {
  const userRoles: any = useSelector(
    (state: AppState) => state?.appConfig?.['user-roles']
  );
  const { initialValues: storeValues, actionsValues }: any = useSelector(
    (state: AppState) => state?.commonEntry?.formData
  );

  const endPoint = generateValues.makeEndPoint();
  const moduleName = generateValues.makeStoreKey();

  const formFields = generateValues.makeFormFields();
  const tableColumns = generateValues.makeTableColumns();
  const searchOption = generateValues.makeSearchOptions();

  const pageValues = generateValues.makePageValues();
  const modalValues = generateValues.makeModalValues();

  const initialValues = generateValues.makeInitialValues(storeValues);
  const validationSchema = generateValues.makeSchemaValues(storeValues);

  const userRoleStore = userRoleValues.makeStoreKey();
  const userRoleEndPoint = userRoleValues.makeEndPoint();

  const tableCols: GridColDef[] = generateTableCols(tableColumns);

  const memoizedList = useCallback(
    (userRoleStore) =>
      batch(() => {
        store?.dispatch(
          getListData({
            url: userRoleEndPoint.default,
            storeKey: userRoleStore
          })
        );
      }),
    [store?.dispatch]
  );

  const handleModalForm = (updatedValues: any) =>
    handleToggleModal({ ...actionsValues, ...updatedValues });

  const modFormField = formFields.map((field) => {
    if (field.name == 'role_id') field.options = userRoles;
    return field;
  });

  useEffect(() => memoizedList(userRoleStore), [userRoleStore]);

  return (
    <PageWrapper
      pageValues={pageValues}
      createAction={
        <AddButton
          color="primary"
          variant="contained"
          buttonText={pageValues.createText}
          handleClick={handleModalForm}
        />
      }
    >
      <Grid item xs={12}>
        {userRoles ? (
          <DataTable
            columns={tableCols}
            endPoint={endPoint}
            storeKey={moduleName}
            formFields={modFormField}
            searchOption={searchOption}
            modalValues={modalValues}
            actionsValues={actionsValues}
            initialValues={{
              ...initialValues,
              ...storeValues
            }}
            validationSchema={validationSchema}
            handleToggleModal={handleModalForm}
          />
        ) : (
          <></>
        )}
      </Grid>
    </PageWrapper>
  );
}

UserPage.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default UserPage;
