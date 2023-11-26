import dayjs from 'dayjs';
import { useState } from 'react';
import {
  Box,
  Grid,
  Stack,
  Avatar,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Pagination as MuiPagination
} from '@mui/material';
import {
  EditOutlined,
  DeleteOutlined,
  CircleOutlined,
  CategoryOutlined,
  ExpandMoreOutlined
} from '@mui/icons-material';
import { grey, pink } from '@mui/material/colors';
import { actionType, columnType } from '@/utilities/constants/application';

function CustomCardGrid({
  rows,
  columns,
  rowCountState,
  paginationModel,
  handleButtonClick,
  handlePagination
}) {
  const primaryKey = columns[0].field;
  const secondaryKey = columns[1].field;
  const secondaryFormat = columns[1].format;
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleAccordion =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <>
      <Grid container spacing={0.1}>
        {rows.map((item, idx) => {
          return (
            <Grid key={idx} item xs={12} sm={12} md={4}>
              <Accordion
                expanded={expanded === `panel${idx}`}
                onChange={handleAccordion(`panel${idx}`)}
                sx={{
                  p: 1,
                  m: 1,
                  bgcolor: grey[50],
                  borderColor: grey[100]
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreOutlined />}
                  aria-controls={`panel-content${idx}`}
                  id={`panel-header${idx}`}
                >
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <CategoryOutlined />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={item[primaryKey]}
                      secondary={dayjs(item[secondaryKey]).format(
                        secondaryFormat
                      )}
                    />
                  </ListItem>
                </AccordionSummary>
                <AccordionDetails>
                  {columns.slice(2).map((column, idx) => {
                    let displayValue = '';

                    switch (column.type) {
                      case columnType.STRING:
                        displayValue = item[column.field];
                        break;

                      case columnType.DATETIME:
                        displayValue = dayjs(item[column.field]).format(
                          column.format
                        );
                        break;

                      default:
                        displayValue = item[column.field];
                        break;
                    }

                    return (
                      <ListItem key={idx}>
                        <ListItemAvatar>
                          <Avatar>
                            <CircleOutlined fontSize="small" />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={displayValue} secondary="" />
                      </ListItem>
                    );
                  })}

                  <Divider sx={{ my: 1.8 }} />

                  <Stack spacing={1} direction="row" justifyContent="flex-end">
                    <IconButton
                      aria-label="edit"
                      onClick={(_event) =>
                        handleButtonClick({
                          id: item.id,
                          type: actionType.EDIT
                        })
                      }
                    >
                      <EditOutlined
                        color="primary"
                        sx={{
                          width: 28,
                          height: 28
                        }}
                      />
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      onClick={(_event) =>
                        handleButtonClick({
                          id: item.id,
                          type: actionType.DELETE
                        })
                      }
                    >
                      <DeleteOutlined
                        sx={{
                          width: 28,
                          height: 28,
                          color: pink[500]
                        }}
                      />
                    </IconButton>
                  </Stack>
                </AccordionDetails>
              </Accordion>
            </Grid>
          );
        })}
      </Grid>
      <Stack spacing={2}>
        <Box display="flex" height={80}>
          <Box m="auto">
            <MuiPagination
              color="primary"
              count={rowCountState}
              page={paginationModel.page + 1 || 1}
              onChange={handlePagination}
            />
          </Box>
        </Box>
      </Stack>
    </>
  );
}

export default CustomCardGrid;
