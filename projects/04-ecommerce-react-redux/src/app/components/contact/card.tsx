import { ContactData } from './contactData';

interface ContactCardPropsImage {
  img: string;
}

export interface ContactInfo {
  title: string;
  content: React.ReactNode[];
}

export interface ContactCardProps extends ContactCardPropsImage {
  data: Array<ContactInfo>;
}

export const ContactCard = ({ img, data }: ContactCardProps) => {
  return (
    <section className='flex flex-col md:flex-row gap-4 border'>
      <div className='md:min-w-[300px] md:w-[300px]'>
        <img
          alt='Photo of the agency'
          src={img}
          className='w-full bg-white md:object-cover h-[300px]'
        />
      </div>
      <ContactData data={data} />
    </section>
  );
};
