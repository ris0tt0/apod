import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import React, { ReactNode } from 'react';

const MUIProvider: React.FC<{ children?: ReactNode }> = ({ children }) => {
  const theme = createTheme({
    palette: { mode: 'dark' },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export { MUIProvider };
