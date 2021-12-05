import {ButtonProps, ArrowDirections, ButtonColors} from './Button.props';
import styles from './Button.module.css';
import classnames from 'classnames';
import ArrowIcon from './icons/arrow.svg';
import React from 'react';

export const Button = (
  { appearance, hasArrowIcon = false, arrowDirection = ArrowDirections.right, children, className, ...restProps } : ButtonProps,
): JSX.Element => {
  const arrowIconClassName = classnames(styles.arrowIcon, {
    [styles.arrowDirectionIsDown]: arrowDirection === ArrowDirections.down,
  });

  return (
    <button
      className={classnames(className, styles.button, {
        [styles.primary]: appearance === ButtonColors.primary,
        [styles.ghost]: appearance === ButtonColors.ghost,
      })}
      {...restProps}
    >
      {children}
      {hasArrowIcon && (<ArrowIcon className={arrowIconClassName} />)}
    </button>
  );
};
