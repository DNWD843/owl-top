import React from 'react';
import {SidebarProps} from "./Sidebar.props";
import styles from './Sidebar.module.css';
import {Menu} from "../Menu/Menu";
import Logo from '../logo.svg';
import classnames from "classnames";

export const Sidebar = ({ className, ...restProps }: SidebarProps): JSX.Element => (
  <div className={classnames(className, styles.sidebar)} {...restProps}>
    <Logo className={styles.logo}/>
    <div>search input</div>
    <Menu />
  </div>
);
