import classNames from 'classnames';
import ReactPaginate from 'react-paginate';
import ArrowLeft from '../../assets/img/ArrowLef';
import ArrowRight from '../../assets/img/ArrowRight';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setPoginationSelect } from '../../redux/poginationSlice';
import styles from './Pogination.module.scss';

type PoginationType = {
  totalPageCount: number;
};

const Pogination: React.FC<PoginationType> = ({ totalPageCount }) => {
  const { valueTheme } = useAppSelector((state) => state.themeSlice);
  const { poginationSelect } = useAppSelector((state) => state.poginationSlice);

  const dispatch = useAppDispatch();
  return (
    <>
      <ReactPaginate
        className={styles.items}
        disabledClassName={styles.disabled}
        pageClassName={classNames(styles.item, {
          [styles.themeWhiteItem]: valueTheme,
        })}
        pageLinkClassName={classNames('page-link', {
          [styles.bodyMon]: valueTheme,
        })}
        previousClassName={classNames(styles.previous__item, {
          [styles.themeWhitePrevious]: valueTheme,
        })}
        previousLinkClassName={classNames('page-link', {
          [styles.bodyMon]: valueTheme,
        })}
        nextClassName={classNames(styles.next__item, {
          [styles.themeWhiteNext]: valueTheme,
        })}
        nextLinkClassName={classNames('page-link', {
          [styles.bodyMon]: valueTheme,
        })}
        breakClassName="page-item"
        breakLinkClassName={classNames('page-link', {
          [styles.bodyMon]: valueTheme,
        })}
        activeClassName={classNames(styles.active, {
          [styles.themeActive]: valueTheme,
        })}
        breakLabel="..."
        nextLabel={<ArrowRight color={valueTheme ? 'black' : 'white'} />}
        previousLabel={<ArrowLeft color={valueTheme ? 'black' : 'white'} />}
        onPageChange={(e) => dispatch(setPoginationSelect(e.selected + 1))}
        pageCount={3}
      />
    </>
  );
};

export default Pogination;
