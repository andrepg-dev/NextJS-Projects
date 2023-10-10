import {
  GetDataLocalStorage,
  SaveInLocalStorage,
} from '@/app/utils/saveInLocalStorage';
import { useEffect, useState } from 'react';

export const useLocalStorage = (key = 'tasks') => {
  const [tasks, setTask] = useState([]);

  useEffect(() => {
    const localStorageData = GetDataLocalStorage(key);
    if (localStorageData?.length > 0) {
      setTask(localStorageData);
    }
  }, [key]);

  useEffect(() => {
    SaveInLocalStorage(key, tasks);
  }, [tasks, key]);

  return [tasks, setTask];
};
