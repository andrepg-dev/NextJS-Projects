import { Data } from './data';

interface ContactDataProps {
  data: { title: string; content: React.ReactNode[] }[];
}

export const ContactData = ({ data }: ContactDataProps) => {
  return (
    <div className='grid grid-cols-2 grid-rows-2 w-full p-4 [&>div>h1]:text-lg gap-4'>
      {data.map((item, index) => (
        <Data key={index} title={item.title}>
          {item.content.map((contentItem, contentIndex) => (
            <span key={contentIndex}>{contentItem}</span>
          ))}
        </Data>
      ))}
    </div>
  );
};
