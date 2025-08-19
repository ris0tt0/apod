import { LinearProgress, styled } from '@mui/material';
import React, { FC, PropsWithChildren, useEffect, useState } from 'react';
import { ApodApi } from '../api';
import { ApodApiImpl } from '../api/apodapi';
import { Commands } from '../commands';
import CommandsImpl from '../commands/commands';
import { CommandsContext } from '../contexts/commands';
import { ApodDB } from '../db';
import { ApodIDB } from '../db/idb';

const StatusContainer = styled('div')`
  display: flex,
  justifyContent: center,
  alignItems: 'center,
  height: 100%,
  width: 100%,
`;

export const CommandsProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isError, setIsError] = useState(false);
  const [commands, setCommands] = useState<Commands | null>(null);

  useEffect(() => {
    const api: ApodApi = new ApodApiImpl();
    const db: ApodDB = new ApodIDB();
    const commands: Commands = new CommandsImpl({ api, db });

    commands
      .init()
      .then(() => {
        setCommands(commands);
      })
      .catch(() => setIsError(true));
  }, []);

  if (isError) {
    return <StatusContainer>error😔</StatusContainer>;
  }

  if (!commands) {
    return (
      <StatusContainer>
        <LinearProgress sx={{ width: '300px' }} variant="indeterminate" />
      </StatusContainer>
    );
  }

  return (
    <CommandsContext.Provider value={commands}>
      {children}
    </CommandsContext.Provider>
  );
};

export default CommandsProvider;
