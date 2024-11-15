import { Box } from '@mui/material';
import React, { FC, PropsWithChildren, useEffect, useState } from 'react';
import { Commands } from '.';
import { ApodApi } from '../api';
import { ApodApiImpl } from '../api/apodapi';
import { ApodDB } from '../db';
import { ApodIDB } from '../db/idb';
import CommandsImpl from './commands';
import { CommandsContext } from './context';

const InitingApp: FC = () => {
  return <Box>initing</Box>;
};
const InitingAppError: FC = () => {
  return <Box>error😔</Box>;
};

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
    return <InitingAppError />;
  }

  if (!commands) {
    return <InitingApp />;
  }

  return (
    <CommandsContext.Provider value={commands}>
      {children}
    </CommandsContext.Provider>
  );
};
