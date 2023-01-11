import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type initialStateType = {
  valueTheme: boolean;
};

const initialState: initialStateType = {
  valueTheme: false,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setValueTheme: (state, actions: PayloadAction<boolean>) => {
      state.valueTheme = actions.payload;
    },
  },
});

export const { setValueTheme } = themeSlice.actions;
export default themeSlice.reducer;
