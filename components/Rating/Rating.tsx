import {RatingProps} from './Rating.props';
import styles from './Rating.module.css';
import classnames from 'classnames';
import {Star} from './Star';
import {useEffect, useState} from 'react';

const DEFAULT_RATING = 5;

export const Rating = ({ isEditable, rating, setRating, className, ...props }:RatingProps) => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(DEFAULT_RATING).fill(<></>));
  const containerClassName = classnames(className, styles.container);

  useEffect(() => {
    setRatingArray(new Array(rating).fill(<></>));
  }, [rating]);

  return (
    <div className={containerClassName} {...props}>
      {
        ratingArray.map((star, index) => (
          <Star
            key={index}
            className={classnames(styles.star, {
              [styles.filled]: index < rating
            })}
          />
        ))
      }

    </div>
  );
};
