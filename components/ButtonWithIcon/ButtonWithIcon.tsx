import {ButtonWithIconProps, ButtonColors} from './ButtonWithIconProps';
import styles from './ButtonWithIcon.module.css';
import classnames from 'classnames';
import React from 'react';
import {icons} from "./constants";

export const ButtonWithIcon = (
  { appearance, icon, className, ...restProps } : ButtonWithIconProps,
): JSX.Element => {
  const Icon = icons[icon];

  return (
    <button
      className={classnames(className, styles.button, {
        [styles.primary]: appearance === ButtonColors.primary,
        [styles.white]: appearance === ButtonColors.white,
      })}
      {...restProps}
    >
      <Icon />
    </button>
  );
};
