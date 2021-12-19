import StarIcon from './images/star.svg';
import {RatingStarProps} from "./RatingStar.props";
import classnames from "classnames";
import styles from './RatingStar.module.css';

export const RatingStar = (
  {
    isEditable,
    isFilled,
    changeRatingValue,
    setPreviousRatingValue,
    setNewRatingValue,
    handlePressSpaceKeyboardButton,
  }: RatingStarProps) => {

  const starIconClassName = classnames(styles.icon, {
    [styles.editable]: isEditable,
    [styles.filled]: isFilled,
  });

  return (
    <StarIcon
      className={starIconClassName}
      onMouseEnter={changeRatingValue}
      onMouseLeave={setPreviousRatingValue}
      onClick={setNewRatingValue}
      tabIndex={isEditable ? 0 : -1}
      onKeyDown={isEditable ? handlePressSpaceKeyboardButton : undefined}
    />
  );
};
