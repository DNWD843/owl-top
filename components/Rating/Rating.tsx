import {RatingProps} from './Rating.props';
import styles from './Rating.module.css';
import classnames from 'classnames';
import {RatingStar} from '../RatingStar/RatingStar';
import {useCallback, useState} from 'react';
import {DEFAULT_RATING_ARRAY_LENGTH} from '../../constants';

const ratingArray: JSX.Element[] = new Array(DEFAULT_RATING_ARRAY_LENGTH).fill(<></>);

export const Rating = ({ isEditable = true, rating, setRating, className, ...props }: RatingProps) => {
  const [currentRatingValue, setCurrentRatingValue] = useState<number>(rating);
  const containerClassName = classnames(className, styles.container);

  const changeRatingValue = useCallback((index) => () => {
    if (!isEditable) return;
    setCurrentRatingValue(index + 1);
  }, [isEditable]);

  const setPreviousRatingValue = useCallback(() => {
    if (!isEditable) return;
    setCurrentRatingValue(rating);
  }, [rating, isEditable]);

  const setNewRatingValue = useCallback((index) => () => {
    if (!isEditable || !setRating) return;
    setRating(index + 1);
  }, [setRating, isEditable]);

  return (
    <div className={containerClassName} {...props}>
      {
        ratingArray.map((item, index) => (
          <RatingStar
            key={index}
            isEditable={isEditable}
            isFilled={index < currentRatingValue}
            changeRatingValue={changeRatingValue(index)}
            setPreviousRatingValue={setPreviousRatingValue}
            setNewRatingValue={setNewRatingValue(index)}
          />
        ))
      }

    </div>
  );
};
