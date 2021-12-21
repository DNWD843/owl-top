import React from 'react';
import {SidebarProps} from "./Sidebar.props";
import styles from './Sidebar.module.css';

export const Sidebar = ({ ...restProps }: SidebarProps): JSX.Element => (
  <div {...restProps}>
    Sidebar
  </div>
);
