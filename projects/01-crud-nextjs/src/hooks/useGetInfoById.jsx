'use client';
import { useEffect, useState } from 'react';
import { useTasks } from './useTasks';

export const useGetInfoById = ({ id }) => {
  const [taskInfo, setTaskInfo] = useState({});
  const tasks = useTasks();

  useEffect(() => {
    const taskSelected = tasks.find((task) => task.id === id);
    setTaskInfo(taskSelected);
  }, [tasks, id]);

  return { taskInfo };
};
