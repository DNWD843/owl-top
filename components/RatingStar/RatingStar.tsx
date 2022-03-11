import StarIcon from './images/star.svg';
import {RatingStarProps} from "./RatingStar.props";
import classnames from "classnames";
import styles from './RatingStar.module.css';
import {forwardRef} from "react";

// eslint-disable-next-line react/display-name
export const RatingStar = forwardRef<HTMLDivElement, RatingStarProps>((
  {
    isEditable,
    isFilled,
    changeRatingValue,
    setPreviousRatingValue,
    setNewRatingValue,
    handlePressKeyboardArrowButton,
    tabIndex,
  }, ref) => {

  const starIconClassName = classnames(styles.icon, {
    [styles.editable]: isEditable,
    [styles.filled]: isFilled,
  });

  return (
    <div ref={ref} onKeyDown={handlePressKeyboardArrowButton}>
      <StarIcon
        className={starIconClassName}
        onMouseEnter={changeRatingValue}
        onMouseLeave={setPreviousRatingValue}
        onClick={setNewRatingValue}
        tabIndex={tabIndex}
      />
    </div>
  );
});
