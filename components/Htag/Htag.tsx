import {HtagProps} from './Htag.props';
import styles from './Htag.module.css';
import classnames from "classnames";

export const Htag = ({ tag, children, className, ...restProps }: HtagProps): JSX.Element => {
  const headingOneClassName = classnames(className, styles.h1);
  const headingTwoClassName = classnames(className, styles.h2);
  const headingThreeClassName = classnames(className, styles.h3);

  switch (tag) {
    case "h1": return (<h1 className={headingOneClassName} {...restProps}>{children}</h1>);
    case "h2": return (<h2 className={headingTwoClassName} {...restProps}>{children}</h2>);
    case "h3": return (<h3 className={headingThreeClassName} {...restProps}>{children}</h3>);
    default: return (<h1>{children}</h1>);
  }
};
