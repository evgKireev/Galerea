import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type initialStateType = {
  poginationSelect: number;
  poginationCount: number;
};

const initialState: initialStateType = {
  poginationSelect: 1,
  poginationCount: 0,
};

const poginationSlice = createSlice({
  name: 'poginstion',
  initialState,
  reducers: {
    setPoginationSelect: (state, actions: PayloadAction<number>) => {
      state.poginationSelect = actions.payload;
    },
    setpoginationCount: (state, actions: PayloadAction<number>) => {
      state.poginationCount = actions.payload;
    },
  },
});

export const { setPoginationSelect, setpoginationCount } =
  poginationSlice.actions;
export default poginationSlice.reducer;
