import React from 'react';
import {FooterProps} from './Footer.props';
import styles from './Footer.module.css';

export const Footer = ({ ...restProps }: FooterProps): JSX.Element => (
  <div {...restProps}>
    Footer
  </div>
);
