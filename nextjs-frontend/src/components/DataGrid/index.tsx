import * as React from 'react';
import {
  DataGrid,
  GridPagination,
  useGridApiContext,
  useGridSelector
} from '@mui/x-data-grid';
import {
  GridColDef,
  GridRenderCellParams,
  useGridRootProps,
  gridPageSizeSelector,
  gridFilteredTopLevelRowCountSelector
} from '@mui/x-data-grid-pro';
import { Box, Pagination as MuiPagination } from '@mui/material';
import { TablePaginationProps } from '@mui/material/TablePagination';

import { DeleteButton, EditButton } from '../Buttons';
import { dataTable } from '@/utilities/constants/application';

const getPageCount = (rowCount: number, pageSize: number): number => {
  if (pageSize > 0 && rowCount > 0) {
    return Math.ceil(rowCount / pageSize);
  }

  return 0;
};

const Pagination = ({
  page,
  onPageChange,
  className
}: Pick<TablePaginationProps, 'page' | 'onPageChange' | 'className'>) => {
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();

  const pageSize = useGridSelector(apiRef, gridPageSizeSelector);

  const visibleTopLevelRowCount = useGridSelector(
    apiRef,
    gridFilteredTopLevelRowCountSelector
  );

  const pageCount = getPageCount(
    rootProps.rowCount ?? visibleTopLevelRowCount,
    pageSize
  );

  return (
    <MuiPagination
      color="primary"
      className={className}
      count={pageCount}
      page={page + 1}
      onChange={(event, newPage) => {
        onPageChange(event as any, newPage - 1);
      }}
    />
  );
};

function CustomDataGrid({
  isLoading: _isLoading,
  columns,
  rows,
  rowCountState,
  paginationModel,
  handlePaginationModel,
  handleButtonClick,
  isListViewOnly = false
}) {
  let actions: any[] = [];
  let serials: any[] = [
    {
      field: 'id',
      type: 'string',
      headerName: '#',
      renderCell: (params: GridRenderCellParams<any>) => params.row.no
    }
  ];

  actions = [
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      cellClassName: 'actions',
      getActions: ({ id }) => {
        return [
          <EditButton id={id} key={1} handleClick={handleButtonClick} />,
          <DeleteButton id={id} key={2} handleClick={handleButtonClick} />
        ];
      },
      width: 100
    }
  ];

  const newCols: GridColDef[] = [...serials, ...columns, ...actions];

  return (
    <Box sx={{ px: 2, pb: 2, height: 500 }}>
      <DataGrid
        rows={rows}
        columns={newCols}
        loading={false}
        // loading={isLoading}
        rowCount={rowCountState}
        paginationMode="server"
        pageSizeOptions={[
          dataTable.PAGE_SIZE_10,
          dataTable.PAGE_SIZE_25,
          dataTable.PAGE_SIZE_100
        ]}
        paginationModel={paginationModel}
        onPaginationModelChange={handlePaginationModel}
        slots={{
          pagination: (props) => (
            <GridPagination ActionsComponent={Pagination} {...props} />
          )
        }}
        getRowId={(row) => row.id}
      />
    </Box>
  );
}

export default CustomDataGrid;
