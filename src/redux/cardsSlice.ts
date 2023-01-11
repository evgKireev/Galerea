import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  AutorType,
  CardsType,
  CardsTypePayload,
  LocationsType,
} from '../@types/types/cards';

type initialStateType = {
  cards: CardsType[];
  status: string;
  autors: AutorType[];
  locations: LocationsType[];
  searchValue: string;
  selectAutor: number | undefined;
  selectLocation: number | undefined;
  createdFrom: string;
  createdBefore: string;
  selectAut: string;
  selectLoc: string;
};

const initialState: initialStateType = {
  cards: [],
  status: '',
  autors: [],
  locations: [],
  searchValue: '',
  selectAutor: undefined,
  selectLocation: undefined,
  createdFrom: '',
  createdBefore: '',
  selectAut: '',
  selectLoc: '',
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    getCards: (state, actions: PayloadAction<CardsTypePayload>) => {},
    getCardsCreated: (state, actions: PayloadAction<CardsTypePayload>) => {},
    getAutors: (state, actions: PayloadAction<undefined>) => {},
    getLocations: (state, actions: PayloadAction<undefined>) => {},
    setCards: (state, actions: PayloadAction<CardsType[]>) => {
      state.cards = actions.payload;
    },
    setAutors: (state, actions: PayloadAction<AutorType[]>) => {
      state.autors = actions.payload;
    },
    setLocations: (state, actions: PayloadAction<LocationsType[]>) => {
      state.locations = actions.payload;
    },
    setStatusCards: (state, actions: PayloadAction<string>) => {
      state.status = actions.payload;
    },
    setSearchValue: (state, actions: PayloadAction<string>) => {
      state.searchValue = actions.payload;
    },
    setSelectAutor: (state, actions: PayloadAction<number | undefined>) => {
      state.selectAutor = actions.payload;
    },
    setSelectLocation: (state, actions: PayloadAction<number | undefined>) => {
      state.selectLocation = actions.payload;
    },
    setCreatedFrom: (state, actions: PayloadAction<string>) => {
      state.createdFrom = actions.payload;
    },
    setCreatedBefore: (state, actions: PayloadAction<string>) => {
      state.createdBefore = actions.payload;
    },
    setSelectAut: (state, actions: PayloadAction<string>) => {
      state.selectAut = actions.payload;
    },
    setSelectLoc: (state, actions: PayloadAction<string>) => {
      state.selectLoc = actions.payload;
    },
  },
});
export const {
  getCards,
  setCards,
  setStatusCards,
  getAutors,
  getLocations,
  setAutors,
  setLocations,
  setSearchValue,
  setSelectAutor,
  setSelectLocation,
  setCreatedBefore,
  setCreatedFrom,
  getCardsCreated,
  setSelectAut,
  setSelectLoc,
} = cardsSlice.actions;
export default cardsSlice.reducer;
