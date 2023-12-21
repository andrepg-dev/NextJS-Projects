'use client';
import { useFullScreenLogic } from '@/app/hooks/useFullScreenLogic';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Fullscreen } from 'lucide-react';

export const FullScreenComponent = () => {
  const { fullScreenValues } = useFullScreenLogic();

  return (
    <>
      {/* <Dialog>
        <DialogTrigger>
          <Button variant={'outline'} size={'icon'}>
            <Fullscreen width={16} height={16} />
          </Button>
        </DialogTrigger>
        <DialogContent>
          
        </DialogContent>
      </Dialog> */}
    </>
  );
};
