import { Stack, Typography } from '@mui/material';
import React from 'react';

export const APOD = ({ explanation, title, media_type, url }) => {
  return (
    <Stack sx={{ justifyContent: 'center', alignItems: 'center' }}>
      {media_type === 'image' && (
        <Stack sx={{ justifyContent: 'center', m: 2 }}>
          <img src={url} />
        </Stack>
      )}
      <Stack
        sx={{ width: 4 / 5, justifyContent: 'center', alignItems: 'center' }}
      >
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2">{explanation}</Typography>
      </Stack>
    </Stack>
  );
};
