import {InputProps} from './Input.props';
import styles from './Input.module.css';
import React, {ForwardedRef, forwardRef} from 'react';
import classNames from "classnames";

// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, InputProps>(({className, error, ...props}, ref) => {
  return (
    <div className={classNames(styles.formField, className)}>
      <input
        ref={ref}
        className={classNames( styles.input, {
          [styles.withError]: error,
        })}
        {...props}
      />
      {error && (<span className={styles.errorMessage}>{error}</span>)}
    </div>
  );
});
