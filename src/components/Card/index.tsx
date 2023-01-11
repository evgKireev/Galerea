import classNames from 'classnames';
import { API } from '../../@types/constant';
import { useAppSelector } from '../../redux/hooks';
import styles from './Card.module.scss';

type CardsType = {
  authorId: number;
  created: string;
  id: number;
  imageUrl: string;
  locationId: number;
  name: string;
};

const Card: React.FC<CardsType> = ({
  imageUrl,
  created,
  name,
  id,
  authorId,
  locationId,
}) => {
  const { autors } = useAppSelector((state) => state.cardsSlice);
  const { locations } = useAppSelector((state) => state.cardsSlice);
  const autorFilter = autors.filter((value) => value.id === authorId);
  const locationsFilter = locations.filter((value) => value.id === locationId);
  return (
    <div className={styles.card}>
      <img
        className={styles.img}
        src={`https://test-front.framework.team/${imageUrl}`}
      ></img>
      <div className={styles.innerDesc}>
        <div className={styles.title}>{name}</div>
        <div className={styles.text}>
          <span>Author:</span>
          {autorFilter[0]?.name}
        </div>
        <div className={styles.text}>
          <span>Created:</span> {created}
        </div>
        <div className={styles.text}>
          <span>Location:</span> {locationsFilter[0]?.location}
        </div>
      </div>
    </div>
  );
};

export default Card;
