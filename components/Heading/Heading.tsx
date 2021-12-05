import {HeadingProps, HeadingTypes} from './Heading.props';
import styles from './Heading.module.css';
import classnames from "classnames";

export const Heading = ({ type = HeadingTypes.h1, children, className = "", ...restProps }: HeadingProps): JSX.Element => {
  const headingClassName = classnames(className, styles[type]);

  switch (type) {
    case HeadingTypes.h1: return (<h1 className={headingClassName} {...restProps}>{children}</h1>);
    case HeadingTypes.h2: return (<h2 className={headingClassName} {...restProps}>{children}</h2>);
    case HeadingTypes.h3: return (<h3 className={headingClassName} {...restProps}>{children}</h3>);
    default: return (<h1 className={headingClassName}>{children}</h1>);
  }
};
