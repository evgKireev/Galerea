import Search from '../Search';
import SelectAutor from '../SelectAutor';
import styles from './Filter.module.scss';
import SelectLocation from '../SelectLocation';
import Created from '../Ceated';
const Filter = () => {
  return (
    <div className={styles.inner}>
      <Search />
      <SelectAutor />
      <SelectLocation />
      <Created />
    </div>
  );
};

export default Filter;
