'use client';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { CheckSquare, Heart, Plus } from 'lucide-react';
import { useState } from 'react';

export const ButtonsInteractive = () => {
  const [wishlist, setWishlist] = useState(false);
  const [cart, setCart] = useState(false);
  const { toast } = useToast();

  const handleAddCart = () => {
    if (!cart) {
      toast({
        description: 'Product added succesfully. ✅',
        duration: 1500,
      });
    }
    setCart(!cart);
  };

  return (
    <div className='flex gap-1'>
      <Button
        className={`text-sm ${
          cart
            ? 'text-green-500 hover:text-green-500 hover:bg-transparent'
            : 'text-blue-400 hover:text-blue-400'
        } w-full`}
        variant={'outline'}
        size={'sm'}
        onClick={() => handleAddCart()}
      >
        {cart ? (
          <div className='flex gap-1 items-center'>
            <span>Agregar más</span>
          </div>
        ) : (
          <div className='flex items-center gap-1'>
            <Plus width={14} height={14} />
            <span>Add to cart</span>
          </div>
        )}
      </Button>
      <Button
        className='text-sm flex items-center gap-1 text-blue-400'
        variant={'outline'}
        size={'sm'}
        onClick={() => setWishlist(!wishlist)}
      >
        <Heart
          width={14}
          height={14}
          className={`text-red-500 ${wishlist && 'fill-red-500 pop-animation'}`}
        />
      </Button>
    </div>
  );
};
