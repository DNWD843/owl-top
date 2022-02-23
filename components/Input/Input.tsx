import {InputProps} from './Input.props';
import styles from './Input.module.css';
import React, {ForwardedRef, forwardRef} from 'react';
import classNames from "classnames";

// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, InputProps>(({className, ...props}, ref) => {
  return (
    <input ref={ref} className={classNames(className, styles.input)} {...props} />
  );
});
