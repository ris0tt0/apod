import { Box, Paper } from '@material-ui/core';
import React from 'react';
import { PageOne } from './pages/one';

const App = () => {
  return (
    <Paper>
      <Box
        height="100vh"
        display="flex"
        flex={1}
        justifyContent="center"
        alignItems="center"
      >
        <PageOne />
      </Box>
    </Paper>
  );
};

export { App };
