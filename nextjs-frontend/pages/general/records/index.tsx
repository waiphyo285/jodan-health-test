import { useCallback, useEffect } from 'react';
import { batch, useSelector } from 'react-redux';
import { GridColDef } from '@mui/x-data-grid-pro';
import { Grid } from '@mui/material';

import SidebarLayout from '@/layouts/SidebarLayout';
import DataTable from '@/contents/Common/DataTable';

import { AddButton } from '@/components/Buttons';
import PageWrapper from '@/components/PageWrapper';

import { AppState, store } from '@/redux/store';
import { getListData } from '@/redux/config.slice';
import { handleToggleModal } from '@/utilities/Handlers';

import languageValues from '@/sources/pages/Language';
import generateValues from '@/sources/pages/Record';
import generateTableCols from '@/configs/TableColumns';

function RecordPage() {
  const { initialValues: storeValues, actionsValues } = useSelector(
    (state: AppState) => state?.commonEntry.formData
  );

  const { languages }: any = useSelector((state: AppState) => state?.appConfig);

  const languageStore = languageValues.makeStoreKey();
  const languageEndPoint = languageValues.makeEndPoint();

  const endPoint = generateValues.makeEndPoint();
  const moduleName = generateValues.makeStoreKey();

  const formFields = generateValues.makeFormFields();
  const tableColumns = generateValues.makeTableColumns();
  const searchOption = generateValues.makeSearchOptions();

  const pageValues = generateValues.makePageValues();
  const modalValues = generateValues.makeModalValues();

  const initialValues = generateValues.makeInitialValues(storeValues);
  const validationSchema = generateValues.makeSchemaValues(storeValues);

  const tableCols: GridColDef[] = generateTableCols(tableColumns);

  const memoizedList = useCallback(
    (languageStore) =>
      batch(() => {
        store?.dispatch(
          getListData({
            url: languageEndPoint.default,
            storeKey: languageStore
          })
        );
      }),
    [store?.dispatch]
  );

  const handleModalForm = (updatedValues: any) =>
    handleToggleModal({ ...actionsValues, ...updatedValues });

  const modFormField = formFields.map((field) => {
    if (field.name == 'language_id') field.options = languages;
    return field;
  });

  useEffect(() => memoizedList(languageStore), [languageStore]);

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
        {languages && (
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
        )}
      </Grid>
    </PageWrapper>
  );
}

RecordPage.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default RecordPage;
