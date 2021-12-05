import React from 'react';
import {TagColors, TagProps, TagSize} from "./Tag.props";
import styles from './Tag.module.css';
import classnames from "classnames";

export const Tag = ({ size = TagSize.small, className, color = TagColors.ghost, href, children, ...restProps }: TagProps) => {
  const tagClassName = classnames(className, styles.tag, {
    [styles.small]: size === TagSize.small,
    [styles.medium]: size === TagSize.medium,
    [styles.ghost]: color === TagColors.ghost,
    [styles.red]: color === TagColors.red,
    [styles.green]: color === TagColors.green,
    [styles.grey]: color === TagColors.grey,
    [styles.primary]: color === TagColors.primary,
  });

  return (
    <div className={tagClassName} {...restProps}>
      {
        href
          ? (<a href={href} target="_blank" rel="noopener noreferrer">{children}</a>)
          : (<>{children}</>)
      }
    </div>
  );
};
