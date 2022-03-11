import React, {forwardRef, useState} from 'react';
import {ReviewFormProps} from "./ReviewForm.props";
import styles from './ReviewForm.module.css';
import classnames from "classnames";
import {Rating} from "../Rating/Rating";
import {Textarea} from "../Textarea/Textarea";
import {Button} from "../Button/Button";
import {Input} from "../Input/Input";
import CloseIcon from './close.svg';
import {useForm, Controller, FieldError} from "react-hook-form";
import {IReviewForm, IReviewSentResponse} from "./ReviewForm.interface";
import classNames from "classnames";
import axios from "axios";
import {API} from "../../helpers/api";

export const ReviewForm = ({ productId, className, isOpened, ...props }: ReviewFormProps) => {
  const { control, register, handleSubmit, formState: { errors }, reset } = useForm<IReviewForm>();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const submitForm = async (formData: IReviewForm) => {
    try {
      const { data } = await  axios.post<IReviewSentResponse>(API.review.createDemo, {...formData, productId});
      if (data.message) {
        setIsSuccess(true);
        reset();
      } else {
        setError("Something went wrong, dude.");
      }
    } catch (err: any) {
      setError(err.message);
    }

  };

  return (
    <form  onSubmit={handleSubmit(submitForm)}>
      <div className={classnames(styles.reviewForm, className)} {...props}>
        <Input
          {...register('name', {required: { value: true, message: 'Введите имя'}})}
          placeholder="Имя"
          error={errors?.name?.message}
          tabIndex={isOpened ? 0 : -1}
        />
        <Input
          {...register('title', {required: {value: true, message: 'Введите заголовок'}})}
          placeholder="Заголовок отзыва"
          className={styles.title}
          error={errors?.title?.message}
          tabIndex={isOpened ? 0 : -1}
        />
        <div className={styles.rating}>
          <span>Оценка</span>
          <Controller
            control={control}
            name="rating"
            render={({field, fieldState}) => (
              <Rating
                isEditable
                rating={field.value}
                setRating={field.onChange}
                error={fieldState?.error?.message}
                tabIndex={isOpened ? 0 : -1}
                {...field}
              />
            )}
            rules={{
              required: {
                message: "Поставьте оценку",
                value: true,
              },
            }}
          />
        </div>
        <Textarea
          {...register('description', {required: {value: true, message: 'Заполните поле отзыв'}})}
          placeholder="Текст отзыва"
          className={styles.description}
          error={errors?.description?.message}
          tabIndex={isOpened ? 0 : -1}
        />
        <div className={styles.submit}>
          <Button className={styles.button} appearance="primary" tabIndex={isOpened ? 0 : -1}>Оправить</Button>
          <span>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
        </div>
      </div>

      {isSuccess && (
        <div className={classNames(styles.success, styles.panel)}>
          <div className={styles.successTitle}>Благодарим Вас за отзыв!</div>
          <div>Ваш отзыв отправлен и будет опубликован после модерации.</div>
          <CloseIcon className={styles.close} onClick={() => setIsSuccess(false)}/>
        </div>
      )}
      {Boolean(error) && (
        <div className={classnames(styles.error, styles.panel)}>
          Ошибка запроса! Попробуйте, пожалуйста снова!
          <CloseIcon className={styles.close} onClick={() => setError('')}/>
        </div>
      )}

    </form>
  );
};
