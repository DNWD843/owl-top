import React, {forwardRef} from 'react';
import {CardProps} from "./Card.props";
import styles from './Card.module.css';
import classnames from "classnames";

// eslint-disable-next-line react/display-name
export const Card = forwardRef<HTMLDivElement, CardProps>((
  { color = "white", children, className, ...props },
  ref) => {
  return (
    <div ref={ref} className={classnames(styles.card, className, {
      [styles.blue]: color === 'blue'
    })} {...props}
    >
      {children}
    </div>
  );
});
