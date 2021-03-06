import {ProductProps} from './Product.props';
import styles from './Product.module.css';
import {Card} from "../Card/Card";
import {Rating} from "../Rating/Rating";
import {Tag} from "../Tag/Tag";
import {Button} from "../Button/Button";
import {declOfNum, priceRu} from "../../helpers/helpers";
import {Divider} from "../Divider/Divider";
// import Image from 'next/image';
import classNames from "classnames";
import {forwardRef, useRef, useState} from "react";
import {Review} from "../Review/Review";
import {ReviewForm} from "../ReviewForm/ReviewForm";
import { motion } from 'framer-motion';

// eslint-disable-next-line react/display-name
export const Product = motion(forwardRef<HTMLDivElement, ProductProps>(({product, className, ...props}, ref) => {
  const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
  const reviewRef = useRef<HTMLDivElement>(null);

  const reviewVariants = {
    hidden: {
      opacity: 0,
      height: 0,
    },
    visible: {
      opacity: 1,
      height: "auto",
    },
  };

  const scrollIntoView = () => {
    setIsReviewOpened(true);
    reviewRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    reviewRef.current?.focus();
  };

  return (
    <div className={className} {...props} ref={ref}>
      <Card className={styles.product}>
        <div className={styles.logo}>
          <img
            src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
            alt={product.title}
            width={70}
            height={70}
          />
        </div>

        <div className={styles.title}>{product.title}</div>

        <div className={styles.price}>
          {priceRu(product.price)}
          {product?.oldPrice && <Tag className={styles.discount} color="green">{priceRu(product.price - product.oldPrice)}</Tag> }
        </div>

        <div className={styles.credit}>
          {`${priceRu(product.credit)}/`}
          <span className={styles.month}>мес</span>
        </div>

        <div className={styles.rating}>
          <Rating rating={product.reviewAvg ?? product.initialRating}  />
        </div>

        <div className={styles.tags}>
          {product.categories.map(
            (category) => <Tag key={category} className={styles.categoryTag} color="ghost">{category}</Tag>)
          }
        </div>

        <div className={styles.priceTitle}>цена</div>

        <div className={styles.creditTitle}>кредит</div>

        <div className={styles.rateTitle}>
          <a href="#ref" onClick={scrollIntoView}>
            {`${product.reviewCount} ${declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}`}
          </a>

        </div>

        <Divider className={styles.hr} />

        <div className={styles.description}>
          {product.description}
        </div>

        <div className={styles.features}>
          {
            product.characteristics.map((characteristic) => (
              <div key={characteristic.name} className={styles.characteristic}>
                <span className={styles.characteristicName}>{characteristic.name}</span>
                <span className={styles.characteristicDots} />
                <span className={styles.characteristicValue}>{characteristic.value}</span>
              </div>
            ))
          }
        </div>

        <div className={styles.advantagesBlock}>
          {product?.advantages && (
            <div className={styles.advantages}>
              <div className={styles.advantagesTitle}>Преимущества</div>
              <div>{product.advantages}</div>
            </div>
          )}
          {product?.disadvantages && (
            <div className={styles.disadvantages}>
              <div className={styles.advantagesTitle}>Недостатки</div>
              <div>{product.disadvantages}</div>
            </div>
          )}
        </div>

        <Divider className={classNames(styles.hr, styles.hr2)} />

        <div className={styles.actions}>
          <Button className={styles.button} appearance="primary">Узнать подробнее</Button>
          <Button
            className={styles.button}
            appearance="ghost"
            arrowDirection={isReviewOpened ? 'down' : 'right'}
            hasArrowIcon
            onClick={() => setIsReviewOpened(!isReviewOpened)}
          >
            Читать отзывы
          </Button>
        </div>
      </Card>

      <motion.div
        variants={reviewVariants}
        initial='hidden'
        animate={isReviewOpened ? "visible" : "hidden"}
      >
        <Card
          color="blue"
          className={classNames(styles.reviews)}
          ref={reviewRef}
          tabIndex={isReviewOpened ? 0 : -1}
        >
          {product.reviews.map((review) => (
            <div key={review._id}>
              <Review review={review} />
              <Divider />
            </div>
          ))}
          <ReviewForm productId={product._id} isOpened={isReviewOpened}/>
        </Card>
      </motion.div>

    </div>
  );
}));
