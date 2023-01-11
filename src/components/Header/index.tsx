import Logo from '../../assets/logo.png';
import { BsSunFill } from 'react-icons/bs';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import styles from './Header.module.scss';
import classNames from 'classnames';
import { setValueTheme } from '../../redux/themeSlice';
import { getCards } from '../../redux/cardsSlice';
import { setPoginationSelect } from '../../redux/poginationSlice';

const Header = () => {
  const { valueTheme } = useAppSelector((state) => state.themeSlice);
  const { poginationSelect } = useAppSelector((state) => state.poginationSlice);
  const { searchValue } = useAppSelector((state) => state.cardsSlice);
  const { selectAutor } = useAppSelector((state) => state.cardsSlice);
  const { selectLocation } = useAppSelector((state) => state.cardsSlice);
  const dispatch = useAppDispatch();
  return (
    <div className={styles.inner}>
      <div
        className={styles.logo}
        onClick={() => {
          dispatch(
            getCards({
              poginationSelect,
              searchValue,
              selectAutor,
              selectLocation,
            })
          );
        }}
      >
        <img src={Logo} alt="logo" />
      </div>
      <div>
        <BsSunFill
          className={classNames(styles.svg, { [styles.sunBlack]: valueTheme })}
          onClick={() => dispatch(setValueTheme(!valueTheme))}
        />
      </div>
    </div>
  );
};

export default Header;
