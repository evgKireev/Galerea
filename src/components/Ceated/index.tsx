import { IoIosClose } from 'react-icons/io';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import classNames from 'classnames';
import styles from './Created.module.scss';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import React, { useCallback, useEffect, useState } from 'react';
import {
  getCards,
  getCardsCreated,
  setCreatedBefore,
  setCreatedFrom,
} from '../../redux/cardsSlice';

const Created: React.FC = () => {
  const { createdFrom } = useAppSelector((state) => state.cardsSlice);
  const { createdBefore } = useAppSelector((state) => state.cardsSlice);
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const { valueTheme } = useAppSelector((state) => state.themeSlice);
  const { poginationSelect } = useAppSelector((state) => state.poginationSlice);
  const { selectLocation } = useAppSelector((state) => state.cardsSlice);
  const { searchValue } = useAppSelector((state) => state.cardsSlice);
  const { selectAutor } = useAppSelector((state) => state.cardsSlice);
  const dispatch = useAppDispatch();

  const arrow = openModal ? (
    <MdKeyboardArrowUp
      className={styles.arrow}
      onClick={() => setOpenModal(false)}
    />
  ) : (
    <MdKeyboardArrowDown
      className={styles.arrow}
      onClick={() => setOpenModal(true)}
    />
  );
  return (
    <div className={styles.wrapper}>
      <div
        className={classNames(styles.select, {
          [styles.selectActive]: openModal,
          [styles.themeWhite]: valueTheme,
        })}
      >
        <div> Created</div>
        <div className={styles.btnBlock}>
          {createdFrom || createdBefore ? (
            <IoIosClose
              onClick={() => {
                dispatch(setCreatedBefore(''));
                dispatch(setCreatedFrom(''));
                dispatch(
                  getCards({
                    poginationSelect,
                    searchValue,
                    selectAutor,
                    selectLocation,
                  })
                );
              }}
            />
          ) : null}
          {arrow}
        </div>
      </div>
      <div
        className={classNames(styles.selectActiveInner, {
          [styles.blockModal]: openModal,
          [styles.selectEvent]: openModal,
          [styles.themeWhiteModal]: valueTheme,
        })}
      >
        <ul
          className={classNames(styles.list, {
            [styles.listActive]: !openModal,
            [styles.InputTheme]: valueTheme,
          })}
        >
          <div className={styles.innerInput}>
            <input
              value={createdFrom}
              className={classNames(styles.input, {
                [styles.themeWhiteInput]: valueTheme,
              })}
              placeholder="from"
              onChange={(e: any) => {
                dispatch(setCreatedFrom(e.target.value));
              }}
            />
          </div>
          -
          <div className={styles.innerInput}>
            <input
              value={createdBefore}
              className={classNames(styles.input, {
                [styles.themeWhiteInput]: valueTheme,
              })}
              placeholder="before"
              onChange={(e: any) => {
                dispatch(setCreatedBefore(e.target.value));
              }}
              onKeyUp={(e) => {
                if (e.key === 'Enter') {
                  dispatch(
                    getCardsCreated({
                      poginationSelect,
                      searchValue,
                      selectAutor,
                      createdFrom,
                      createdBefore,
                      selectLocation,
                    })
                  );
                }
              }}
            />
          </div>
        </ul>
      </div>
    </div>
  );
};
export default Created;
