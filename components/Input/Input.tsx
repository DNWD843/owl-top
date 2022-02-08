import {InputProps} from './Input.props';
import styles from './Input.module.css';
import React from 'react';
import classNames from "classnames";

export const Input = ({className, ...props}: InputProps) => {
  return (
    <input className={classNames(className, styles.input)} {...props} />
  );
};
