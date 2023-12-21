import { CONTACTS } from '@/lib/contact';
import { ContactCard } from '../components/contact/card';

export default function ContactsPage() {
  return (
    <main className='md:px-medium px-mobile pt-10 text-titulo flex flex-col gap-10'>
      <h1 className='text-3xl font-black uppercase'>Contactos</h1>
      {CONTACTS.map((contact, index) => (
        <>
          <h2 className='text-2xl font-bold'>Tienda {contact.title}</h2>
          <ContactCard key={index} img={contact.img} data={contact.data} />
        </>
      ))}
    </main>
  );
}
