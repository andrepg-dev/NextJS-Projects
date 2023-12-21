interface TitleProps {
  title: string;
  itemsNumber: number;
  withLine?: boolean;
}

export const Title = ({ title, itemsNumber, withLine }: TitleProps) => {
  return (
    <section className={`text-3xl font-black text-titulo flex flex-col gap-2 uppercase ${withLine && ' pb-4 border-b'}`}>
      <h1>{title}</h1>
      <p className='text-orange-500 text-sm uppercase'>{itemsNumber} items</p>
    </section>
  );
};
