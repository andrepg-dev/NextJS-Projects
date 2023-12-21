'use client';
import { useAppDispatch, useAppSelector } from '@/app/hooks/redux';
import { useScapeKey } from '@/app/hooks/useScape';
import { resetValues } from '@/app/store/slice/full-screen-selected-device';

export const useFullScreenLogic = () => {
  const fullScreenValues = useAppSelector((state) => state.addFullScreen);
  const dispatch = useAppDispatch();

  const handleReset = () => {
    dispatch(resetValues());
  };
  useScapeKey(handleReset);

  return { fullScreenValues, handleReset };
};
