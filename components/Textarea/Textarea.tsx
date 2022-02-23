import {TextareaProps} from './Textarea.props';
import styles from './Textarea.module.css';
import classNames from 'classnames';
import React, {forwardRef} from 'react';

// eslint-disable-next-line react/display-name
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({className, error, ...props}, ref) => {
  return (
    <div className={classNames(className, styles.formField)}>
      <textarea
        ref={ref}
        className={classNames(styles.textarea, {
          [styles.withError]: error,
        })}
        {...props}
      />
      {error && (<span className={styles.errorMessage}>{error}</span>)}
    </div>
  );
});
