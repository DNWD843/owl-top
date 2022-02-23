import {RatingProps} from './Rating.props';
import styles from './Rating.module.css';
import classnames from 'classnames';
import {RatingStar} from '../RatingStar/RatingStar';
import {useCallback, useState, KeyboardEvent, useEffect, forwardRef} from 'react';
import {DEFAULT_RATING_ARRAY_LENGTH} from '../../constants';
import classNames from "classnames";

const ratingArray: JSX.Element[] = new Array(DEFAULT_RATING_ARRAY_LENGTH).fill(<></>);

// eslint-disable-next-line react/display-name
export const Rating = forwardRef<HTMLDivElement, RatingProps>((
  { isEditable = false,
    rating = 0,
    setRating,
    error,
    className,
    ...props },
  ref) => {
  const [currentRatingValue, setCurrentRatingValue] = useState<number>(0);
  const containerClassName = classnames(className, styles.container);

  const changeRatingValue = useCallback((index: number) => () => {
    if (!isEditable) return;
    setCurrentRatingValue(index + 1);
  }, [isEditable]);

  const setPreviousRatingValue = useCallback(() => {
    if (!isEditable) return;
    setCurrentRatingValue(rating);
  }, [rating, isEditable]);

  const setNewRatingValue = useCallback((index: number) => () => {
    if (!isEditable || !setRating) return;
    setRating(index + 1);
  }, [setRating, isEditable]);

  const handlePressSpaceOnRatingStar = useCallback((index: number) => (evt: KeyboardEvent<SVGElement>) => {
    if ((evt.code !== "Space") || !setRating) return;
    setRating(index + 1);
  }, [setRating]);

  useEffect(() => {
    setCurrentRatingValue(rating);
  }, [rating]);

  return (
    <div ref={ref} className={classNames(styles.container, {
      [styles.withError]: error,
    })} {...props}>
      {
        ratingArray.map((item, index) => (
          <RatingStar
            key={index}
            isEditable={isEditable}
            isFilled={index < currentRatingValue}
            changeRatingValue={changeRatingValue(index)}
            setPreviousRatingValue={setPreviousRatingValue}
            setNewRatingValue={setNewRatingValue(index)}
            handlePressSpaceKeyboardButton={handlePressSpaceOnRatingStar(index)}
          />
        ))
      }
      {error && (<span className={styles.errorMessage}>{error}</span>)}
    </div>
  );
});
