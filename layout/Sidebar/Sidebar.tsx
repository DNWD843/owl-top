import React from 'react';
import {SidebarProps} from "./Sidebar.props";
import styles from './Sidebar.module.css';
import {Menu} from "../Menu/Menu";

export const Sidebar = ({ ...restProps }: SidebarProps): JSX.Element => (
  <div {...restProps}>
    <Menu />
  </div>
);
