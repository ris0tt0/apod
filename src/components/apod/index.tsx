import { Box, Skeleton, Stack, styled } from '@mui/material';
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
  height: 500px;
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

export const ApodDisplay: FC<{ loading: boolean; item: ApodItem }> = ({
  loading,
  item,
}) => {
  return (
    <Stack component={'article'}>
      <Box component="h2" sx={{ mb: 2 }}>
        {loading ? <Skeleton /> : item.title}
      </Box>
      {loading ? (
        <Skeleton
          variant="rectangular"
          sx={{ width: '800px', height: '400px' }}
        />
      ) : (
        <ApodDisplayMedia item={item} />
      )}
      <Box component={'p'} sx={{ px: 1, my: 2 }}>
        {loading ? (
          <>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </>
        ) : (
          item.explanation
        )}
      </Box>
      <Box component="address" display={'flex'} sx={{ justifyContent: 'end' }}>
        <i>{item.copyright}</i>
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
        setIsError({ msg: error.response?.data?.msg ?? 'error' });
      })
      .finally(() => setIsLoading(false));
  }, [date]);

  if (isError) {
    return <ErrorLoading>💥 {isError.msg}</ErrorLoading>;
  }

  if (!item) {
    return null;
  }

  return <ApodDisplay loading={isLoading} item={item} />;
};
