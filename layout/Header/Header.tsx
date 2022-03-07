import React, {useEffect, useState} from 'react';
import {HeaderProps} from './Header.props';
import styles from './Header.module.css';
import classnames from "classnames";
import Logo from '../logo.svg';
import {ButtonWithIcon} from "../../components/ButtonWithIcon/ButtonWithIcon";
import { motion } from 'framer-motion';
import {Sidebar} from "../Sidebar/Sidebar";
import { useRouter } from 'next/router';

export const Header = ({ className, ...restProps }: HeaderProps): JSX.Element => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMenuOpened(false);
  }, [router]);

  const variants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: {
        stiffness: 20
      }
    },
    closed: {
      opacity: 0,
      x: '100%',
    }
  };

  const handleClickMenu = () => {setIsMenuOpened(true);};
  const handleCloseMenu = () => {setIsMenuOpened(false);};

  return (
    <header className={classnames(className, styles.header)} {...restProps}>
      <Logo />
      <ButtonWithIcon appearance="white" icon="menu" onClick={handleClickMenu}/>
      <motion.div
        className={styles.mobileMenu}
        variants={variants}
        animate={isMenuOpened ? "opened" : "closed"}
        initial="closed"
      >
        <Sidebar />
        <ButtonWithIcon className={styles.menuClose} appearance="white" icon="close" onClick={handleCloseMenu} />
      </motion.div>
    </header>
  );
};
