import React, {
  PropsWithChildren,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import { CommandsContext } from './context';
import { Commands } from '.';
import CommandsImpl from './commands';
import { ApodApi } from '../api';
import { ApodApiImpl } from '../api/apodapi';
import { ApodDB } from '../db';
import { ApodIDB } from '../db/idb';
import { Box } from '@mui/material';

const InitingApp = () => {
  return <Box>initing</Box>;
};
const InitingAppError = () => {
  return <Box>error😔</Box>;
};

const api: ApodApi = new ApodApiImpl();
const db: ApodDB = new ApodIDB();
const commands: Commands = new CommandsImpl({ api, db });

export const CommandsProvider = ({ children }: { children: ReactNode }) => {
  const [isError, setIsError] = useState(false);
  const [isInit, setIsInit] = useState(true);

  useEffect(() => {
    if (commands.isInit) return;

    commands
      .init()
      .then(() => {
        setIsInit(false);
      })
      .catch(() => setIsError(true));
  }, []);

  if (isError) {
    return <InitingAppError />;
  }

  if (isInit) {
    return <InitingApp />;
  }

  return (
    <CommandsContext.Provider value={commands}>
      {children}
    </CommandsContext.Provider>
  );
};
