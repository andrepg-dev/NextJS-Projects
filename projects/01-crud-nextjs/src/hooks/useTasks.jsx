import { useContext } from 'react';
import { TaskContext } from '../context/taskContext';

export const useTasks = () => {
  const { tasks: values } = useContext(TaskContext);

  if (!values) throw new Error('Tasks must be with a value');
  return values;
};
