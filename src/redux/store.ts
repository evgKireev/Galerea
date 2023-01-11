import { configureStore } from '@reduxjs/toolkit';
import { rootSaga } from './Sagas/rootSaga';
import createSagaMiddleware from 'redux-saga';
import themeSlice from './themeSlice';
import poginationSlice from './poginationSlice';
import cardsSlice from './cardsSlice';

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    themeSlice,
    poginationSlice,
    cardsSlice,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
