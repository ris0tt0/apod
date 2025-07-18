import { Box, Stack, styled } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import { ApodItem } from '../../db';
import { useCommands } from '../../hooks/commands';
import { getYoutubeId } from '../utils';

const ErrorLoading = styled('div')`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

export const ApodDisplayMedia: FC<{ item: ApodItem }> = ({ item }) => {
  if (item.media_type === 'image') {
    return <img src={item.url} />;
  } else if (item.media_type === 'video') {
    const id = getYoutubeId(item.url);
    return <YouTube videoId={id} />;
  }

  return null;
};

export const ApodDisplay: FC<{ item: ApodItem }> = ({ item }) => {
  return (
    <Stack sx={{ m: 2 }}>
      <Box typography="h5" sx={{ mb: 2 }}>
        {item.title}
      </Box>
      <ApodDisplayMedia item={item} />

      <Box sx={{ px: 1, my: 2 }}>{item.explanation}</Box>
      <Box typography="caption" alignItems={'end'}>
        {item.copyright}
      </Box>
    </Stack>
  );
};

/**
 * Used to load the Astronomy Picture of the Day for the given date.
 * @param date: string
 * @returns void
 */

export const Apod: FC<{ date: string }> = ({ date }) => {
  const commands = useCommands();
  const [isLoading, setIsLoading] = useState(true);
  const [item, setItem] = useState<ApodItem | null>(null);
  const [isError, setIsError] = useState<{ msg: string } | null>(null);

  useEffect(() => {
    setIsLoading(true);
    commands
      .requestDay(date)
      .then((result) => {
        setIsError(null);
        setItem(result);
      })
      .catch((error: any) => {
        // TODO fix error to be a string instead of AxiosError.
        setIsError({ msg: error.response?.data?.msg ?? 'error' });
      })
      .finally(() => setIsLoading(false));
  }, [date]);

  if (isLoading) {
    return null;
  }

  if (!item) {
    return null;
  }

  if (isError) {
    return <ErrorLoading>💥 {isError.msg}</ErrorLoading>;
  }

  return <ApodDisplay item={item} />;
};
