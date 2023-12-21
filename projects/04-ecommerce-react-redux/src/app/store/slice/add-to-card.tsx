import { DeviceToBuyWithOutMobileDetails } from '@/lib/type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: Array<DeviceToBuyWithOutMobileDetails> = [];

export const AddToCardSlice = createSlice({
  initialState,
  name: 'AddToCard',
  reducers: {
    // Agregando los valores al carrito de compras
    addToCard(state, action: PayloadAction<DeviceToBuyWithOutMobileDetails>) {
      const { payload } = action;
      const { price, description, img, title, category, id } = payload;

      state.push({
        id,
        title,
        description,
        price,
        img,
        category,
      });
    },

    // Eliminando un producto del carrito de compras
    deleteCartProduct(state, action: PayloadAction<string>) {
      const { payload } = action;

      const index = state.findIndex((item) => item.id === payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },

    // Limpiando el carrito de compras
    clearCart(state) {
      state.splice(0, state.length);
    },
  },
});

export const { addToCard, deleteCartProduct, clearCart } =
  AddToCardSlice.actions;
