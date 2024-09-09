import { useContext } from 'react';
import { CommandsContext } from './context';

export const useCommands = () => {
  const commands = useContext(CommandsContext);

  return commands;
};
