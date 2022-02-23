import React from 'react';
import {ReviewFormProps} from "./ReviewForm.props";
import styles from './ReviewForm.module.css';
import classnames from "classnames";
import {Rating} from "../Rating/Rating";
import {Textarea} from "../Textarea/Textarea";
import {Button} from "../Button/Button";
import {Input} from "../Input/Input";
import CloseIcon from './close.svg';

export const ReviewForm = ({ productId, className, ...props }: ReviewFormProps) => {

  return (
    <>
      <div className={classnames(styles.reviewForm, className)} {...props}>
        <Input placeholder="Имя"/>
        <Input placeholder="Заголовок отзыва" className={styles.title}/>
        <div className={styles.rating}>
          <span>Оценка</span>
          <Rating rating={0} />
        </div>
        <Textarea placeholder="Текст отзыва" className={styles.description}/>
        <div className={styles.submit}>
          <Button className={styles.button} appearance="primary">Оправить</Button>
          <span>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
        </div>
      </div>

      <div className={styles.success}>
        <div className={styles.successTitle}>Благодарим Вас за отзыв!</div>
        <div>Ваш отзыв отправлен и будет опубликован после модерации.</div>
        <CloseIcon className={styles.close} />
      </div>
    </>
  );
};
