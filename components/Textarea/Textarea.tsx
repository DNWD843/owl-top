import {TextareaProps} from './Textarea.props';
import styles from './Textarea.module.css';
import classNames from 'classnames';
import React, {forwardRef} from 'react';

// eslint-disable-next-line react/display-name
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({className, ...props}, ref) => {
  return (
    <textarea ref={ref} className={classNames(className, styles.textarea)} {...props} />
  );
});
