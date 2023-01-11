import styles from './NoContent.module.scss';
import img from '../../assets/noCard.png';
import { useAppSelector } from '../../redux/hooks';
import classNames from 'classnames';

const NoContent: React.FC = () => {
  const { valueTheme } = useAppSelector((state) => state.themeSlice);

  return (
    <div className={styles.inner}>
      <img
        className={classNames({ [styles.itemThemeWhite]: valueTheme })}
        src={img}
        alt="no info img"
      />
      <h1 className={styles.title}>There are no pictures for your request</h1>
    </div>
  );
};

export default NoContent;
