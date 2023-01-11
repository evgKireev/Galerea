import { PayloadAction } from '@reduxjs/toolkit';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { CardsTypePayload } from '../../@types/types/cards';
import {
  getAutors,
  getCards,
  getCardsCreated,
  getLocations,
  setAutors,
  setCards,
  setLocations,
  setStatusCards,
} from '../cardsSlice';
import API from '../utils/API';

function* getCardsWorker(actions: PayloadAction<CardsTypePayload>) {
  yield put(setStatusCards('pennding'));
  const {
    poginationSelect,
    searchValue,
    selectAutor,
    createdFrom,
    createdBefore,
    selectLocation,
  } = actions.payload;
  const { data, ok, problem } = yield call(API.fetchGetCards, {
    poginationSelect,
    searchValue,
    selectAutor,
    createdFrom,
    createdBefore,
    selectLocation,
  });
  if (ok && data) {
    yield put(setCards(data));
    yield put(setStatusCards('fulfilled'));
  } else {
    console.warn(problem);
    yield put(setStatusCards('rejected'));
  }
}

function* getCardsCreatedWorker(actions: PayloadAction<CardsTypePayload>) {
  yield put(setStatusCards('pennding'));
  const {
    poginationSelect,
    searchValue,
    selectAutor,
    createdFrom,
    createdBefore,
    selectLocation,
  } = actions.payload;
  const { data, ok, problem } = yield call(API.fetchGetCardsCreated, {
    poginationSelect,
    searchValue,
    selectAutor,
    createdFrom,
    createdBefore,
    selectLocation,
  });
  if (ok && data) {
    yield put(setCards(data));
    yield put(setStatusCards('fulfilled'));
  } else {
    console.warn(problem);
    yield put(setStatusCards('rejected'));
  }
}

function* getAutorsWorker(actions: PayloadAction<undefined>) {
  const { data, ok, problem } = yield call(API.fetchGetAuthors);
  if (ok && data) {
    yield put(setAutors(data));
  } else {
    console.warn(problem);
  }
}

function* getLocationsWorker(actions: PayloadAction<undefined>) {
  const { data, ok, problem } = yield call(API.fetchGetLocations);
  if (ok && data) {
    yield put(setLocations(data));
  } else {
    console.warn(problem);
  }
}

export default function* cardsSaga() {
  yield all([takeLatest(getCards, getCardsWorker)]);
  yield all([takeLatest(getAutors, getAutorsWorker)]);
  yield all([takeLatest(getLocations, getLocationsWorker)]);
  yield all([takeLatest(getCardsCreated, getCardsCreatedWorker)]);
}
