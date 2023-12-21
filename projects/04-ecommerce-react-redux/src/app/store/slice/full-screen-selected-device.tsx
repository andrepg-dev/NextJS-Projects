import { Device } from '@/lib/type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: Device = {
  deal: { price: 0, memory: '' },
  description: '',
  img: '',
  title: '',
};

export const FullScreenDeviceSlice = createSlice({
  name: 'FullScreenDeviceSlice',
  initialState,
  reducers: {
    addFullScreen(state: any, action: PayloadAction<Device>) {
      state.img = action.payload.img;
      state.title = action.payload.title;
      state.description = action.payload.description;
      state.deal = action.payload.deal;
    },

    resetValues(state) {
      state.title = '';
      state.img = '';
      state.description = '';
      state.deal = { price: 0, memory: '' };
    },
  },
});

export const { addFullScreen, resetValues } = FullScreenDeviceSlice.actions;
