import dayjs from 'dayjs';
import { Chip } from '@mui/material';
import { chipText, columnType } from '../utilities/constants/application';

export default function generateTableCols(tableColumns) {
  return tableColumns.map((column: any) => {
    switch (column.type) {
      case columnType.STRING:
        return column;

      case columnType.SELECT:
        return {
          ...column,
          valueFormatter: (params: any) =>
            column.lookup.find((lookup: any) => lookup.value == params.value)
              ?.label
        };

      case columnType.ARRAY:
        return {
          ...column,
          valueFormatter: (params: any) => {
            const currentRowValue = params.api.getRow(params.id);
            return column.field
              .map((c: string) => currentRowValue[c])
              .join(', ');
          }
        };

      case columnType.DATETIME:
        return {
          ...column,
          valueFormatter: (params: any) =>
            dayjs(params.value).format(column.format)
        };

      case columnType.CHIP:
        return {
          ...column,
          renderCell: (params: any) => {
            const label =
              params.value === 1 ? chipText.STATUS_1 : chipText.STATUS_0;
            return params.value === 1 ? (
              <Chip label={label} color="success" size="small" />
            ) : (
              <Chip label={label} color="warning" size="small" />
            );
          }
        };

      default:
        return column;
    }
  });
}
