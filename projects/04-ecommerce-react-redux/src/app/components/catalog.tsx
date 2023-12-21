import Image from 'next/image';
import Link from 'next/link';

export const catalog_options = [
  { id: 1, src: '/assets/samsung.png', alt: 'samsung' },
  { id: 2, src: '/assets/xiaomi.png', alt: 'xiaomi' },
  { id: 3, src: '/assets/oneplus.png', alt: 'oneplus' },
  { id: 4, src: '/assets/LG.png', alt: 'LG' },
  { id: 5, src: '/assets/motorola.png', alt: 'motorola' },
  { id: 6, src: '/assets/google.png', alt: 'google' },
  { id: 7, src: '/assets/JBL.png', alt: 'jbl' },
  { id: 8, src: '/assets/apple.png', alt: 'apple' },
];

export default function Catalog() {
  return (
    <article className='grid grid-cols-2 md:grid-cols-3 justify-items-center gap-10 xl:grid-cols-4'>
      {catalog_options.map((image) => (
        <Link
          key={image.id}
          href={`/devices/${image.alt}`}
          className='flex flex-col gap-4 items-center justify-center text-center w-[160px] h-[160px] md:h-[200px] md:w-[200px] transition hover:border'
        >
          <Image alt={image.alt} src={image.src} width={100} height={100} />
          <p>{image.alt.toUpperCase()}</p>
        </Link>
      ))}
    </article>
  );
}
