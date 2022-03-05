import {LayoutProps} from './Layout.props';
import {Sidebar} from './Sidebar/Sidebar';
import {Header} from './Header/Header';
import {Footer} from './Footer/Footer';
import styles from './Layout.module.css';
import React from 'react';
import {Up} from "../components";

export const Layout = ({children}: LayoutProps): JSX.Element => (
  <div className={styles.wrapper}>
    <Header className={styles.header} />
    <Sidebar className={styles.sidebar}/>
    <div className={styles.content}>
      {children}
    </div>
    <Footer className={styles.footer}/>
    <Up />
  </div>
);
