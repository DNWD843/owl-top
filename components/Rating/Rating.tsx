import {RatingProps} from './Rating.props';
import styles from './Rating.module.css';
import {RatingStar} from '../RatingStar/RatingStar';
import {useCallback, useState, KeyboardEvent, useEffect, forwardRef, useRef} from 'react';
import {DEFAULT_RATING_ARRAY_LENGTH} from '../../constants';
import classNames from "classnames";

const ratingArray: JSX.Element[] = new Array(DEFAULT_RATING_ARRAY_LENGTH).fill(<></>);

// eslint-disable-next-line react/display-name
export const Rating = forwardRef<HTMLDivElement, RatingProps>((
  { isEditable = false,
    rating = 1,
    setRating,
    error,
    className,
    ...props },
  ref) => {
  const [currentRatingValue, setCurrentRatingValue] = useState<number>(0);

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

  const handlePressArrowButtonOnRatingStar = useCallback((evt: KeyboardEvent<HTMLDivElement>) => {
    if (!isEditable || !setRating) return;

    if (evt.code === 'ArrowRight' || evt.code === 'ArrowUp') {
      evt.preventDefault();
      setRating(rating < 5 ? rating + 1 : 5);
    }

    if (evt.code === 'ArrowLeft' || evt.code === 'ArrowDown') {
      evt.preventDefault();
      setRating(rating > 1 ? rating - 1 : 1);
    }
  }, [isEditable, rating, setRating]);

  const computeFocus = (rating: number, index: number): number => {
    if (!isEditable)  return -1;

    if (!rating && index === 0) return 0;

    if (rating === index + 1) return 0;

    return -1;
  };

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
            handlePressKeyboardArrowButton={handlePressArrowButtonOnRatingStar}
            tabIndex={computeFocus(rating, index)}
          />
        ))
      }
      {error && (<span className={styles.errorMessage}>{error}</span>)}
    </div>
  );
});
