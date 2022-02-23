import React, {forwardRef} from 'react';
import {ReviewFormProps} from "./ReviewForm.props";
import styles from './ReviewForm.module.css';
import classnames from "classnames";
import {Rating} from "../Rating/Rating";
import {Textarea} from "../Textarea/Textarea";
import {Button} from "../Button/Button";
import {Input} from "../Input/Input";
import CloseIcon from './close.svg';
import {useForm, Controller} from "react-hook-form";
import { IReviewForm } from "./ReviewForm.interface";

export const ReviewForm = ({ productId, className, ...props }: ReviewFormProps) => {
  const { control, register, handleSubmit } = useForm<IReviewForm>();
  const submitForm = (data: IReviewForm) => {
    console.log(data);
  };

  return (
    <form  onSubmit={handleSubmit(submitForm)}>
      <div className={classnames(styles.reviewForm, className)} {...props}>
        <Input {...register('name')} placeholder="Имя"/>
        <Input {...register('title')} placeholder="Заголовок отзыва" className={styles.title}/>
        <div className={styles.rating}>
          <span>Оценка</span>
          <Controller
            control={control}
            name="rating"
            render={({field}) => (
              <Rating
                isEditable
                rating={field.value}
                setRating={field.onChange}
                {...field}
              />
            )}
          />
        </div>
        <Textarea {...register('description')} placeholder="Текст отзыва" className={styles.description}/>
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
    </form>
  );
};
