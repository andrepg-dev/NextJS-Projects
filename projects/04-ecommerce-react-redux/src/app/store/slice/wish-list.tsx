import { DeviceToBuyWithOutMobileDetails } from '@/lib/type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: Array<DeviceToBuyWithOutMobileDetails> = [];

export const AddToWishListSlice = createSlice({
  initialState,
  name: 'AddToWishList',
  reducers: {
    // Agregando los valores a la wishlist
    AddToWishList(
      state,
      action: PayloadAction<DeviceToBuyWithOutMobileDetails>
    ) {
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

    // Eliminando un producto de la wishlist
    deleteWishList(state, action: PayloadAction<string>) {
      const { payload } = action;

      const index = state.findIndex((item) => item.id === payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },

    // Limpiando la wishlist
    clearWishList(state) {
      state.splice(0, state.length);
    },
  },
});

export const { AddToWishList, deleteWishList, clearWishList } =
  AddToWishListSlice.actions;
