'use client';
import { TextAreaProps } from '@/app/types';
import { useDebounce } from '@/hooks/useDebounce';
import { getPlaceHolder, getValue } from '@/lib/utils';
import { useEffect, useState } from 'react';

export const TextArea = ({
  type,
  loading,
  onChange,
  value,
  lang,
}: TextAreaProps) => {
  const [text, setText] = useState('');
  const debounceValue = useDebounce(text, 300);

  const handleOnChange = async (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const text = event.target.value;
    setText(text);
  };

  useEffect(() => {
    return onChange(debounceValue);
  }, [debounceValue]);

  useEffect(() => {
    setText(value);
  }, [lang]);

  return (
    <textarea
      className={`w-full resize-none outline-none p-2 min-h-[200px] placeholder:text-xl border-4 rounded focus:border-[#c2dbfe] border-transparent transition duration-300
      ${type === 'to' && 'bg-[#f5f5f5]'}`}
      placeholder={getPlaceHolder({ type, loading })}
      onChange={handleOnChange}
      value={getValue(type, value, text)}
      autoFocus={type === 'from'}
      disabled={type === 'to'}
    ></textarea>
  );
};
