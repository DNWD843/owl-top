import {SortEnum, SortProps} from './Sort.props';
import styles from './Sort.module.css';
import classNames from "classnames";
import SortIcon from './sort.svg';

export const Sort = ({ sort, setSort, className, ...props }: SortProps) => {
  return (
    <div className={classNames(styles.sort, className)} {...props}>
      <span
        onClick={() => setSort(SortEnum.Rating)}
        className={classNames({
          [styles.active]: sort === SortEnum.Rating
        })}
      >
        <SortIcon className={styles.sortIcon} />
        По рейтингу
      </span>

      <span
        onClick={() => setSort(SortEnum.Price)}
        className={classNames({
          [styles.active]: sort === SortEnum.Price
        })}
      >
        <SortIcon className={styles.sortIcon} />
        По цене
      </span>
    </div>
  );
};
