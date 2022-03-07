import {LayoutProps} from './Layout.props';
import {Sidebar} from './Sidebar/Sidebar';
import {Header} from './Header/Header';
import {Footer} from './Footer/Footer';
import styles from './Layout.module.css';
import React, {useState, KeyboardEvent, useRef} from 'react';
import {Up} from "../components";
import classnames from "classnames";

export const Layout = ({children}: LayoutProps): JSX.Element => {
  const [isSkipLinkDisplayed, setIsSkipLinkDisplayed] = useState<boolean>(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  const setSkipLinkAction = (key: KeyboardEvent) => {
    if (key.code === 'Space' || key.code === 'Enter') {
      key.preventDefault();
      bodyRef.current?.focus();
    }
    setIsSkipLinkDisplayed(false);
  };

  return (
    <div className={styles.wrapper}>
      <a
        tabIndex={1}
        className={classnames(styles.skipLink, {
          [styles.displayed]: isSkipLinkDisplayed,
        })}
        onFocus={() => setIsSkipLinkDisplayed(true)}
        onKeyDown={setSkipLinkAction}
      >
        Перейти к содержанию
      </a>
      <Header
        className={styles.header}
      />
      <Sidebar className={styles.sidebar}/>
      <div className={styles.content} ref={bodyRef} tabIndex={0}>
        {children}
      </div>
      <Footer className={styles.footer}/>
      <Up />
    </div>
  );
};
