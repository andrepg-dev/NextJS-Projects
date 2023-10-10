import Link from "next/link";

export const NewTaskCard = () => {
  return (
    <Link href={`/new`} className='h-32 w-[24rem] rounded border flex flex-col items-center justify-center hover:bg-slate-400/10 cursor-pointer'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='icon icon-tabler icon-tabler-square-rounded-plus-2'
        width='28'
        height='28'
        viewBox='0 0 24 24'
        strokeWidth='1'
        stroke='currentColor'
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
        <path d='M12.54 20.996c-.176 .004 -.356 .004 -.54 .004c-7.2 0 -9 -1.8 -9 -9s1.8 -9 9 -9s9 1.8 9 9c0 .185 -.001 .366 -.004 .544'></path>
        <path d='M16 19h6'></path>
        <path d='M19 16v6'></path>
      </svg>

      <span>Add new</span>
    </Link>
  );
};
