'use client';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useFullScreenLogic } from '../hooks/useFullScreenLogic';
import { DialogContentFullScreen } from './dialog-content';

export const Temporal = () => {
  const { fullScreenValues } = useFullScreenLogic();

  return (
    <>
      <Dialog open={fullScreenValues.img != ''}>
        <DialogContent className='max-w-max flex justify-center'>
          <DialogContentFullScreen
            deal={{
              price: fullScreenValues.deal.price || 0,
              memory: fullScreenValues.deal.memory || 'Sin definir',
            }}
            description={fullScreenValues.description}
            img={fullScreenValues.img}
            title={fullScreenValues.title}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};
