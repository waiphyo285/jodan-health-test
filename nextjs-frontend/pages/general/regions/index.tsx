import { useSelector } from 'react-redux';
import { GridColDef } from '@mui/x-data-grid-pro';
import { Grid } from '@mui/material';

import SidebarLayout from '@/layouts/SidebarLayout';
import DataTable from '@/contents/Common/DataTable';

import { AddButton } from '@/components/Buttons';
import PageWrapper from '@/components/PageWrapper';

import { AppState } from '@/redux/store';
import { handleToggleModal } from '@/utilities/Handlers';

import generateValues from '@/sources/pages/Region';
import generateTableCols from '@/configs/GenerateTableCols';

function RegionPage() {
  const { initialValues: storeValues, actionsValues } = useSelector(
    (state: AppState) => state?.commonEntry.formData
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

  const tableCols: GridColDef[] = generateTableCols(tableColumns);

  const handleModalForm = (updatedValues: any) =>
    handleToggleModal({ ...actionsValues, ...updatedValues });

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
        <DataTable
          columns={tableCols}
          endPoint={endPoint}
          storeKey={moduleName}
          formFields={formFields}
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
      </Grid>
    </PageWrapper>
  );
}

RegionPage.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default RegionPage;
