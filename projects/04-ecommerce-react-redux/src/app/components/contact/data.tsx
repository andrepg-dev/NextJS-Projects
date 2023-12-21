interface DataProps {
  title: string;
  children: React.ReactNode;
}

export const Data = ({ title, children }: DataProps) => {
  return (
    <section className='flex flex-col gap-1'>
      <h1>{title}</h1>
      <div className='text-gray-500 flex flex-col'>{children}</div>
    </section>
  );
};
