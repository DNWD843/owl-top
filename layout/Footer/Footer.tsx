import React from 'react';
import {FooterProps} from './Footer.props';
import styles from './Footer.module.css';
import classnames from 'classnames';
import {formatDate, getDateNow} from '../../utils/date';

export const Footer = ({className, ...restProps }: FooterProps): JSX.Element => {
  const footerContainerClassname = classnames(className, styles.footer);
  const currentYear = formatDate(getDateNow().toString(), 'YYYY');

  return (
    <footer className={footerContainerClassname} {...restProps}>
      <div>{`OwlTop © 2020 - ${currentYear} Все права защищены`}</div>
      <a href="#" target="_blank" rel="noopener noreferrer">Пользовательское соглашение</a>
      <a href="#" target="_blank" rel="noopener noreferrer">Политика конфиденциальности</a>
    </footer>
  );
};
