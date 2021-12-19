import React, {DetailedHTMLProps} from "react";

export interface RatingStarProps extends DetailedHTMLProps<React.SVGAttributes<SVGAElement>, SVGAElement> {
  isEditable: boolean,
  isFilled: boolean,
  changeRatingValue: () => void,
  setPreviousRatingValue: () => void,
  setNewRatingValue: () => void,
}
