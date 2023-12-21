import { DeviceToBuy } from '@/lib/type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: DeviceToBuy = {
  img: '',
  title: '',
  description: '',
  price: 0,
  category: 'Accesorios',
  mobileDetails: {
    size: '',
    resolution: '',
    ram: '',
    batterySize: '',
    memory: '',
  },
};

export const InformationProductToBuy = createSlice({
  name: 'InformationProductToBuy',
  initialState,
  reducers: {
    addDeviceToBuy(state, action: PayloadAction<DeviceToBuy>) {
      const { payload } = action;
      const { price, description, img, title, category, mobileDetails } =
        payload;
      const { resolution, batterySize, memory, ram, size } = mobileDetails;

      state.title = title;
      state.description = description;
      state.price = price;
      state.img = img;
      state.category = category;

      state.mobileDetails = {
        size: size,
        resolution: resolution,
        ram: ram,
        batterySize: batterySize,
        memory: memory,
      };
    },
  },
});

export const { addDeviceToBuy } = InformationProductToBuy.actions;
