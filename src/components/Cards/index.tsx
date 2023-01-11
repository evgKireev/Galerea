import classNames from 'classnames';
import { useAppSelector } from '../../redux/hooks';
import Card from '../Card';
import Loader from '../Loader';
import styles from './Cards.module.scss';

const Cards = () => {
  const { cards } = useAppSelector((state) => state.cardsSlice);
  const { searchValue } = useAppSelector((state) => state.cardsSlice);
  const { selectAutor } = useAppSelector((state) => state.cardsSlice);
  const { selectLocation } = useAppSelector((state) => state.cardsSlice);
  const { status } = useAppSelector((state) => state.cardsSlice);

  return (
    <>
      {status === 'pennding' ? (
        <Loader />
      ) : (
        <div className={classNames(styles.cardsInner)}>
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      )}
    </>
  );
};

export default Cards;
