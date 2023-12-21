import { configureStore } from '@reduxjs/toolkit';
import { ToogleMenu } from './slice/open-responsive-menu';
import { InformationProductToBuy } from './slice/buy-a-product';
import { AddToCardSlice } from './slice/add-to-card';
import { FullScreenDeviceSlice } from './slice/full-screen-selected-device';

export const store = configureStore({
  reducer: {
    // 5
    toogleMenu: ToogleMenu.reducer,
    addFullScreen: FullScreenDeviceSlice.reducer,
    addProductoToBuy: InformationProductToBuy.reducer,
    addToCardSlice: AddToCardSlice.reducer,
    addToWishList: AddToCardSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
