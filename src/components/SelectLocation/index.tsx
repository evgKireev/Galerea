import { IoIosClose } from 'react-icons/io';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import classNames from 'classnames';
import styles from './Select.module.scss';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import React, { useState } from 'react';
import {
  setSelectAutor,
  setSelectLoc,
  setSelectLocation,
} from '../../redux/cardsSlice';

const SelectLocation: React.FC = () => {
  const { locations } = useAppSelector((state) => state.cardsSlice);
  const { selectLoc } = useAppSelector((state) => state.cardsSlice);
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const [activSelect, setActivSelect] = React.useState<number | null>(null);
  const { valueTheme } = useAppSelector((state) => state.themeSlice);
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
        <div>{selectLoc ? selectLoc : 'Location'}</div>
        <div className={styles.btnBlock}>
          {selectLoc ? (
            <IoIosClose
              onClick={() => {
                dispatch(setSelectLocation(undefined));
                dispatch(setSelectLoc(''));
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
          {locations.map((value, index) => (
            <li
              onClick={() => {
                setActivSelect(index);
                setOpenModal(false);
                dispatch(setSelectLocation(value.id));
                dispatch(setSelectLoc(value.location));
              }}
              className={classNames(styles.item, {
                [styles.active]: activSelect === index,
                [styles.themeWhiteItem]: valueTheme,
              })}
              key={index}
            >
              {value.location}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default SelectLocation;
