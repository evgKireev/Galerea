import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useCallback, useState } from 'react';
import classNames from 'classnames';
import styles from './Search.module.scss';
import { setSearchValue } from '../../redux/cardsSlice';
import debounce from 'lodash.debounce';

const Search: React.FC = () => {
  const [inpValue, setInpValue] = useState('');
  const { valueTheme } = useAppSelector((state) => state.themeSlice);
  const dispatch = useAppDispatch();
  const updateSearchValue = useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 1000),
    []
  );
  return (
    <div className={styles.inner}>
      <input
        value={inpValue}
        onChange={(e: any) => {
          setInpValue(e.target.value);
          updateSearchValue(e.target.value);
        }}
        placeholder="Name"
        className={classNames(styles.input, {
          [styles.themeWhite]: valueTheme,
        })}
      />
    </div>
  );
};

export default Search;
