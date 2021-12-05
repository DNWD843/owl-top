import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import classnames from 'classnames';
import ArrowIcon from './icons/arrow.svg';

export const Button = ({ appearance, hasArrowIcon = false, arrowDirection, children, className, ...restProps } : ButtonProps): JSX.Element => {
  const arrowIconClassName = classnames(styles.arrowIcon, {
    [styles.arrowDirectionIsDown]: arrowDirection === 'down',
  });

  return (
    <button
      className={classnames(className, styles.button, {
        [styles.primary]: appearance === 'primary',
        [styles.ghost]: appearance === 'ghost',
      })}
      {...restProps}
    >
      {children}
      {hasArrowIcon && (<ArrowIcon className={arrowIconClassName} />)}
    </button>
  );
};
