import { TaskContext } from '@/context/taskContext';
import Link from 'next/link';
import { useContext } from 'react';
import { toast } from 'sonner';
import { IconCircleCheckFilled } from '@/icons/icons';

export const TaskCard = ({ task }) => {
  const { deleteTask } = useContext(TaskContext);

  const handleClick = ({ id }) => {
    toast('Task deleted succesfully 🗑️', {
      style: {
        background: 'black',
        border: '1px white solid',
        color: 'white',
      },
      icon: <IconCircleCheckFilled height={22} />,
    });
    return deleteTask(id);
  };

  return (
    <li className='border rounded p-3 w-[24rem]'>
      <h1 className='text-xl text-blue-600'>{task.title}</h1>
      <p>{task.description}</p>
      {/* Add button to delete */}
      <div className='flex gap-3'>
        <button
          onClick={() => handleClick({ id: task.id })}
          className='border mt-2 p-1 rounded text-sm bg-red-700/40 opacity-40 hover:opacity-100 transition'
        >
          Delete
        </button>
        {/* Edit task */}
        <Link
          href={`/edit/${task.id}`}
          className='border mt-2 p-1 rounded text-sm bg-blue-700/40 opacity-40 hover:opacity-100 transition'
        >
          Edit task
        </Link>
      </div>
    </li>
  );
};
