import React, {DetailedHTMLProps, KeyboardEvent}  from "react";

export interface RatingStarProps extends DetailedHTMLProps<React.SVGAttributes<SVGElement>, SVGAElement> {
  isEditable: boolean,
  isFilled: boolean,
  changeRatingValue: () => void,
  setPreviousRatingValue: () => void,
  setNewRatingValue: () => void,
  handlePressKeyboardArrowButton: (evt: KeyboardEvent<HTMLDivElement>) => void,
  tabIndex: number,
}
