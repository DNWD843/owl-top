import React from 'react';
import {ReviewProps} from "./Review.props";
import styles from './Review.module.css';
import classnames from "classnames";
import UserIcon from './user.svg';
import {formatDate} from "../../utils/date";
import {Rating} from "../Rating/Rating";

export const Review = ({ review, className, ...props }: ReviewProps) => {
  const { name, title, description, createdAt, rating } = review;
  const date = new Date(createdAt).toDateString();

  return (
    <div className={classnames(styles.review, className)} {...props}>
      <UserIcon className={styles.user} />
      <div className={styles.title} >
        <span className={styles.name} >
          {name}
          :
        </span>
        <span >{title}</span>
      </div>

      <div className={styles.date}>
        {formatDate(date, 'DD.MM.YYYY')}
      </div>

      <div className={styles.rating}>
        <Rating rating={rating} />
      </div>
      <div className={styles.description}>
        {description}
      </div>
    </div>
  );
};
