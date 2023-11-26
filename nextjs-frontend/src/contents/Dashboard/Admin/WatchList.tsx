import { MouseEvent, useState } from 'react';
import {
  Box,
  Card,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  styled
} from '@mui/material';
import ViewWeekOutlinedIcon from '@mui/icons-material/ViewWeekOutlined';
import TableRowsOutlinedIcon from '@mui/icons-material/TableRowsOutlined';
import WatchListColumn from './WatchListColumn';
import WatchListRow from './WatchListRow';

const EmptyResultsWrapper = styled('img')(
  ({ theme }) => `
      max-width: 100%;
      width: ${theme.spacing(66)};
      height: ${theme.spacing(34)};
`
);

function WatchList() {
  const [tabs, setTab] = useState<string | null>('watch_list_columns');

  const handleViewOrientation = (
    _event: MouseEvent<HTMLElement>,
    newValue: string | null
  ) => {
    setTab(newValue);
  };

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{ pb: 3 }}
      >
        <Typography variant="h3">Watch List</Typography>
        <ToggleButtonGroup
          value={tabs}
          exclusive
          onChange={handleViewOrientation}
        >
          <ToggleButton disableRipple value="watch_list_columns">
            <ViewWeekOutlinedIcon />
          </ToggleButton>
          <ToggleButton disableRipple value="watch_list_rows">
            <TableRowsOutlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>

      {tabs === 'watch_list_columns' && <WatchListColumn />}

      {tabs === 'watch_list_rows' && <WatchListRow />}

      {!tabs && (
        <Card
          sx={{
            textAlign: 'center',
            p: 3
          }}
        >
          <EmptyResultsWrapper src="/static/images/placeholders/illustrations/1.svg" />

          <Typography
            align="center"
            variant="h2"
            fontWeight="normal"
            color="text.secondary"
            sx={{ mt: 3 }}
            gutterBottom
          >
            Click something, anything!
          </Typography>
        </Card>
      )}
    </>
  );
}

export default WatchList;
