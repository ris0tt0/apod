import React, { FC, memo, useEffect, useState } from 'react';
import Logger from 'js-logger';
import { useCommands } from '../../commands/hooks';
import { ApodItem } from '../../db';
import { Box, Stack } from '@mui/material';
import YouTube from 'react-youtube';
import { getYoutubeId } from '../utils';

const ApodDisplayMedia: FC<{ item: ApodItem }> = ({ item }) => {
  if (item.media_type === 'image') {
    return <img src={item.url} />;
  } else if (item.media_type === 'video') {
    const id = getYoutubeId(item.url);
    return <YouTube videoId={id} />;
  }

  return null;
};

const ApodDisplay: FC<{ item: ApodItem }> = ({ item }) => {
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

const Apod: FC<{ date: string }> = ({ date }) => {
  const commands = useCommands();
  const [isLoading, setIsLoading] = useState(true);
  const [item, setItem] = useState<ApodItem | null>(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // Logger.info('👍🏾date', date, commands);
    setIsLoading(true);
    commands
      .requestDay(date)
      .then((result) => setItem(result))
      .catch((error) => {
        setIsError(true);
        Logger.info('👍🏾requesetApodError', error);
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
    return <Box>error💥</Box>;
  }

  return <ApodDisplay item={item} />;
};

const ApodMemo = memo(Apod);

export default ApodMemo;
