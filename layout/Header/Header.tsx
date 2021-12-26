import React from 'react';
import {HeaderProps} from './Header.props';
import styles from './Header.module.css';

export const Header = ({ ...restProps }: HeaderProps): JSX.Element => (
  <header {...restProps}>
    Header
  </header>
);
