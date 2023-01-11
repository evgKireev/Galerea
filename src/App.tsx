import { useAppDispatch, useAppSelector } from './redux/hooks';
import Header from './components/Header';
import Cards from './components/Cards';
import Pogination from './components/Pogination';
import { PER_PAGE } from './@types/constant';
import Filter from './components/Filter';
import './scss/app.scss';
import { useEffect } from 'react';
import { getAutors, getCards, getLocations } from './redux/cardsSlice';
import Loader from './components/Loader';
import NoContent from './components/NoContent';

const App = () => {
  const { valueTheme } = useAppSelector((state) => state.themeSlice);
  const { poginationSelect } = useAppSelector((state) => state.poginationSlice);
  const { searchValue } = useAppSelector((state) => state.cardsSlice);
  const { selectAutor } = useAppSelector((state) => state.cardsSlice);
  const { selectLocation } = useAppSelector((state) => state.cardsSlice);
  const { cards } = useAppSelector((state) => state.cardsSlice);
  const body = document.querySelector('body');
  // const totalPageCount = Math.ceil(poginationCount / PER_PAGE);
  const dispatch = useAppDispatch();
  if (valueTheme) {
    body?.classList.add('bodyWhite');
  } else {
    body?.classList.remove('bodyWhite');
  }
  useEffect(() => {
    dispatch(
      getCards({
        poginationSelect,
        searchValue,
        selectAutor,
        selectLocation,
      })
    );
    dispatch(getAutors());
    dispatch(getLocations());
  }, [poginationSelect, searchValue, selectAutor, selectLocation]);
  console.log(poginationSelect);
  return (
    <div className="conatiner">
      <Header />
      <Filter />
      {!cards.length ? <NoContent /> : <Cards />}
      {!cards.length ? null : <Pogination totalPageCount={11} />}
    </div>
  );
};

export default App;
