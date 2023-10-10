'use client';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { createContext } from 'react';
import { v4 as uuid } from 'uuid';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTask] = useLocalStorage('tasks');

  // Crear una nueva tarea
  const CreateTask = (task) => {
    const newTask = task;
    Object.assign(newTask, { id: uuid() });

    // Guardar tarea
    const save = [...tasks, newTask];
    setTask(save);
    // Guardar en el LocalStorage
    return;
  };

  // Eliminar un dato del array
  const deleteTask = (id) => {
    const newTaskFilter = tasks.filter((task) => {
      return task.id != id;
    });

    setTask(newTaskFilter);
  };

  // Editar un dato del array
  const editTask = (data) => {
    const taskToChange = tasks.map((task) =>
      task.id === data.id ? data : task
    );
    setTask(taskToChange);
  };

  return (
    <TaskContext.Provider
      value={{ tasks, CreateTask, deleteTask, editTask, setTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};
