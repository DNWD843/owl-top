import {TextareaProps} from './Textarea.props';
import styles from './Textarea.module.css';
import classNames from 'classnames';
import React from 'react';

export const Textarea = ({className, ...props}: TextareaProps) => {
  return (
    <textarea className={classNames(className, styles.textarea)} {...props} />
  );
};
