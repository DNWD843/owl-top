import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import classnames from 'classnames';

export const Button = ({ appearance, children, className, ...restProps } : ButtonProps): JSX.Element => {
  return (
    <button
      className={classnames(className, styles.button, {
        [styles.primary]: appearance === 'primary',
        [styles.ghost]: appearance === 'ghost',
      })}
      {...restProps}
    >
      {children}
    </button>
  );
};
