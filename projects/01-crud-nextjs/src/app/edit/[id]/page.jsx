'use client';
import { Form } from '@/components/form';
import { useGetInfoById } from '../../../hooks/useGetInfoById';

export default function EditPage({ params }) {
  const { id } = params;
  const { taskInfo } = useGetInfoById({ id });

  return (
    <main className='w-full flex justify-center'>
      <Form
        params={taskInfo}
      />
    </main>
  );
}
