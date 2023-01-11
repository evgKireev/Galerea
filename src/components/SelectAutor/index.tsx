import { IoIosClose } from 'react-icons/io';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import classNames from 'classnames';
import styles from './SelectAutor.module.scss';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import React, { useState } from 'react';
import { setSelectAut, setSelectAutor } from '../../redux/cardsSlice';
import { setPoginationSelect } from '../../redux/poginationSlice';

const SelectAutor: React.FC = () => {
  const { valueTheme } = useAppSelector((state) => state.themeSlice);
  const { autors } = useAppSelector((state) => state.cardsSlice);
  const { selectAut } = useAppSelector((state) => state.cardsSlice);
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const [activSelect, setActivSelect] = React.useState<number | null>(null);
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
        <div>{selectAut ? selectAut : 'Author'}</div>
        <div className={styles.btnBlock}>
          {selectAut ? (
            <IoIosClose
              onClick={() => {
                dispatch(setSelectAutor(undefined));
                dispatch(setSelectAut(''));
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
          {autors.map((value, index) => (
            <li
              onClick={() => {
                setActivSelect(index);
                setOpenModal(false);
                dispatch(setSelectAutor(value.id));
                dispatch(setSelectAut(value.name));
              }}
              className={classNames(styles.item, {
                [styles.active]: activSelect === index,
                [styles.themeWhiteItem]: valueTheme,
              })}
              key={index}
            >
              {value.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default SelectAutor;
