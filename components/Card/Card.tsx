import React from 'react';
import {CardProps} from "./Card.props";
import styles from './Card.module.css';
import classnames from "classnames";

export const Card = ({ color = "white", children, className, ...props }: CardProps) => {
  return (
    <div className={classnames(styles.card, className, {
      [styles.blue]: color === 'blue'
    })} {...props}
    >
      {children}
    </div>
  );
};
