import React from 'react';
import {FooterProps} from './Footer.props';
import styles from './Footer.module.css';
import classnames from 'classnames';

export const Footer = ({className, ...restProps }: FooterProps): JSX.Element => {
  const footerContainerClassname = classnames(className, styles.footer);

  return (
    <footer className={footerContainerClassname} {...restProps}>

    </footer>
  );
};
