'use client';
import { NewTaskCard } from '@/components/newTaskCard';
import { TaskCard } from '../components/taskCard';
import { useTasks } from '../hooks/useTasks';

export default function Home() {
  let values = useTasks();

  return (
    <main>
      <ul className='flex gap-3 p-4 flex-wrap'>
        <NewTaskCard />

        {values.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </ul>
    </main>
  );
}
