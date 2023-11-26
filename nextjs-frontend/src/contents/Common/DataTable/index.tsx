import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import { Card, CardHeader } from '@mui/material';

import FormModals from '../ModalForm';
import DataGrid from '@/components/DataGrid';
import SearchInput from '@/components/SearchInput';

import { AppState, store } from '@/redux/store';
import { deleteData, getPageData } from '@/redux/list/common.slice';
import { createData, getOneData, updateData } from '@/redux/entry/common.slice';

import { findAccessMenu } from '@/utilities/Helpers';
import { acccessComponents } from '@/utilities/constants/storeKeys';
import { actionType, dataTable } from '@/utilities/constants/application';

function DataTable({
  endPoint,
  storeKey,
  columns,
  formFields,
  searchOption,
  modalValues,
  actionsValues,
  initialValues,
  validationSchema,
  handleToggleModal,
  isListViewOnly = false
}) {
  const router = useRouter();
  const formRef = useRef(null);
  const {
    data: rows,
    pageInfo,
    reloadTable
  } = useSelector((state: AppState) => state?.commonList?.[storeKey]);

  const [rowCountState, setRowCountState] = useState(
    pageInfo?.totalRowCount || dataTable.ROW_COUNT_0
  );

  const [paginationModel, setPaginationModel] = useState({
    page: dataTable.PAGE_SIZE_0,
    pageSize: dataTable.PAGE_SIZE_10,
    searchKey: '',
    searchValue: ''
  });

  const action = acccessComponents.CAN_VIEW_LIST;
  const canAccess = findAccessMenu(action, router.pathname);

  const handleRefSubmit = () => {
    // don't remove this output meanwhile development!
    console.error('🍒 Fromik error ', formRef?.current?.errors);

    formRef && formRef?.current?.handleSubmit();
  };

  const handlePaginationModel = ({
    page,
    pageSize = dataTable.PAGE_SIZE_10,
    searchKey = '',
    searchValue = ''
  }) => {
    setPaginationModel({
      ...paginationModel,
      page,
      pageSize,
      searchKey,
      searchValue
    });
  };

  const handleButtonClick = ({ id, type }) => {
    if (type === actionType.EDIT)
      handleToggleModal({
        recordId: id,
        actionType: type,
        openEntryModal: true
      });

    if (type === actionType.DELETE)
      handleToggleModal({
        recordId: id,
        actionType: type,
        openConfirmAlert: true
      });
  };

  const handleSearchBlur = ({ key, value }) => {
    if (key !== 'none' && value) {
      handlePaginationModel({
        ...paginationModel,
        searchKey: key,
        searchValue: value
      });
    }
  };

  const handleFormSubmit = (values) => {
    const bodyData = {
      data: values,
      storeKey: storeKey,
      url: endPoint.default
    };

    actionsValues.recordId
      ? store?.dispatch(updateData(bodyData))
      : (delete values.id, store?.dispatch(createData(bodyData)));

    // action is done, reload table after 1 second!
    setTimeout(() => handlePaginationModel(paginationModel), 1000);
  };

  const handleConfirmModal = ({ doAction }) => {
    doAction &&
      (store?.dispatch(
        deleteData({
          storeKey: storeKey,
          url: endPoint.default,
          id: actionsValues.recordId
        })
      ),
      handleToggleModal({
        recordId: '',
        actionType: '',
        openConfirmAlert: false
      }));
  };

  const memoizedPaging = useCallback(
    (pageInfo) =>
      store?.dispatch(
        getPageData({
          url: endPoint.pages,
          storeKey: storeKey,
          pageInfo: pageInfo
        })
      ),
    [store?.dispatch]
  );

  const memoizedFormValues = useCallback(
    (recordId) =>
      store?.dispatch(
        getOneData({
          id: recordId,
          storeKey: storeKey,
          url: endPoint.default
        })
      ),
    [store?.dispatch]
  );

  useEffect(() => {
    actionsValues.recordId &&
      actionsValues.actionType === actionType.EDIT &&
      memoizedFormValues(actionsValues.recordId);
  }, [actionsValues, memoizedFormValues]);

  useEffect(() => {
    memoizedPaging(paginationModel);
  }, [paginationModel, reloadTable, memoizedPaging]);

  useEffect(() => {
    setRowCountState((prevRowCountState) =>
      pageInfo?.totalRowCount !== undefined
        ? pageInfo?.totalRowCount
        : prevRowCountState
    );
  }, [pageInfo?.totalRowCount, setRowCountState]);

  return canAccess ? (
    <Card sx={{ width: '100%' }}>
      <CardHeader
        // title=""
        sx={{ my: 1 }}
        action={
          <SearchInput
            searchOption={searchOption}
            handleSearchBlur={handleSearchBlur}
          />
        }
      />

      <DataGrid
        rows={rows}
        columns={columns}
        isLoading={!rows.length}
        rowCountState={rowCountState}
        paginationModel={paginationModel}
        handlePaginationModel={handlePaginationModel}
        handleButtonClick={handleButtonClick}
        isListViewOnly={isListViewOnly}
      />

      {!isListViewOnly ? (
        <FormModals
          formRef={formRef}
          formFields={formFields}
          modalValues={modalValues}
          initialValues={initialValues}
          actionsValues={actionsValues}
          validationSchema={validationSchema}
          handleRefSubmit={handleRefSubmit}
          handleFormSubmit={handleFormSubmit}
          handleToggleModal={handleToggleModal}
          handleConfirmModal={handleConfirmModal}
        />
      ) : (
        <></>
      )}
    </Card>
  ) : (
    <></>
  );
}

export default DataTable;
