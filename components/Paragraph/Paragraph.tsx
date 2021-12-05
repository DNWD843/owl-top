import React from 'react';
import styles from './Paragraph.module.css';
import classnames from "classnames";
import {ParagraphProps, ParagraphTypes} from "./Paragraph.props";


export const Paragraph = ({ type = ParagraphTypes.p1, children, className, ...restProps }: ParagraphProps): JSX.Element => {
  const paragraphClassName = classnames(className, styles.paragraph, {
    [styles.p1]: type === ParagraphTypes.p1,
    [styles.p2]: type === ParagraphTypes.p2,
    [styles.p3]: type === ParagraphTypes.p3,
  });

  return (
    <p className={paragraphClassName} {...restProps}>
      {children}
    </p>
  );
};
