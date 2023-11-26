import { useState } from 'react';
import { useRouter } from 'next/router';
import {
  Box,
  Select,
  FormControl,
  IconButton,
  OutlinedInput,
  InputAdornment,
  InputLabel,
  MenuItem
} from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';

import { findAccessMenu } from '@/utilities/Helpers';
import { acccessComponents } from '@/utilities/constants/storeKeys';

function SearchInput({ searchOption, handleSearchBlur }) {
  const router = useRouter();
  const action1 = acccessComponents.CAN_FILTER_LIST;
  const action2 = acccessComponents.CAN_SEARCH_LIST;

  const canAccessFilter = findAccessMenu(action1, router.pathname);
  const canAccessSerach = findAccessMenu(action2, router.pathname);

  const [searchInfo, setSearchInfo] = useState({
    key: 'none',
    value: ''
  });

  const handleSearchInfo = (key, value) => {
    setSearchInfo({ ...searchInfo, [key]: value });
    handleSearchBlur({ ...searchInfo, [key]: value });
  };

  return (
    <Box>
      <>
        {canAccessFilter && (
          <FormControl variant="outlined">
            <InputLabel htmlFor="column">Column</InputLabel>
            <Select
              id="column"
              value={searchInfo.key}
              onChange={(event) => handleSearchInfo('key', event.target.value)}
              label="Column"
              autoWidth
            >
              {searchOption.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.displayName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}

        {canAccessSerach && (
          <FormControl sx={{ mx: 1, width: '200px' }} variant="outlined">
            <InputLabel htmlFor="search">Search</InputLabel>
            <OutlinedInput
              id="search"
              type={'text'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton aria-label="search">
                    <SearchOutlined />
                  </IconButton>
                </InputAdornment>
              }
              label="Search"
              onBlur={(event) => handleSearchInfo('value', event.target.value)}
            />
          </FormControl>
        )}
      </>
    </Box>
  );
}

export default SearchInput;
