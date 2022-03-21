import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const BasicPagination = ({pages}) => {
  return (
    <Stack spacing={10}>

      <Pagination count={pages} color="secondary" />
    
    </Stack>
  );
}

export default BasicPagination;