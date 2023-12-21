import Catalogue from '../components/catalog';
import { Sales } from '../components/sales/sales';
import { Temporal } from '../components/temporal';

export default async function Home() {
  return (
    <main className='flex flex-col gap-10 pt-10 md:px-medium px-mobile'>
      <Temporal />

      <Sales />
      <hr className='border-borderDefault ' />
      <Catalogue />
    </main>
  );
}
