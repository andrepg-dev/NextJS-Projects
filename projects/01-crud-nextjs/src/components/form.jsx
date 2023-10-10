'use client';
import { TaskContext } from '../context/taskContext';
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function Form({ params }) {
  const { CreateTask, editTask, tasks } = useContext(TaskContext);
  const router = useRouter();

  useEffect(() => {
    // Si nos envían un parametro con id, hacer la busqueda y cambiar los valores
    if (params) {
      const find = tasks.find((task) => task.id === params.id);

      // Si se encuentra, cambiar los valores del formulario
      if (find) {
        document.getElementById('title').value = params.title;
        document.getElementById('description').value = params.description;
      }
    }
  }, [params, tasks]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    const task = {
      title,
      description,
    };

    if (params) {
      const bodyToSend = {
        id: params.id,
        title: title,
        description: description,
      };

      editTask(bodyToSend);
      return router.push('/');
    }
    // Enviar los valores del task en formato JSON
    CreateTask(task);
    // Irse a la ruta
    return router.push('/');
  };

  return (
    <form
      className='w-[25rem] border shadow-sm shadow-white/20 p-4 pb-7 rounded text-sm m-4'
      id='form'
      onSubmit={handleSubmit}
    >
      <header>
        <h1 className='text-xl'>
          {params ? `Editar ✏️` : 'Create new task 📖'}
        </h1>
      </header>

      <article className='flex flex-col gap-2 mt-2'>
        <div className='flex flex-col gap-1'>
          <label>Title</label>
          <input
            type='text'
            className='text-black px-3 rounded p-1'
            id='title'
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label>Description</label>
          <textarea
            type='text'
            className='text-black px-3 rounded p-1'
            id='description'
          />
        </div>

        <button
          className='border mt-2 p-1 rounded text-sm bg-blue-700/40 opacity-80 hover:opacity-100 transition'
          type='submit'
        >
          {params ? 'Save edit' : 'Save task'}
        </button>
      </article>
    </form>
  );
}
