import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: false,
};

export const ToogleMenu = createSlice({
  name: 'OpenMenuSlice',
  initialState,
  reducers: {
    setToggleMenu(state) {
      state.value = !state.value;
      console.log('state', state.value);
    },
  },
});

export const { setToggleMenu } = ToogleMenu.actions;
