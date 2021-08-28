import { Box, Paper, Typography } from '@material-ui/core';
import React from 'react';

export const APOD = ({ explanation, title, media_type, url }) => {
  return (
    <Box display="flex" flex={1} flexDirection="column">
      {media_type === 'image' && (
        <Paper>
          <img src={url} />
        </Paper>
      )}
      <Box margin="16px" display="flex" flex={1} flexDirection="column">
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2">{explanation}</Typography>
      </Box>
    </Box>
  );
};
