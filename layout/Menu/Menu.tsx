import React, {useContext} from 'react';
import {MyAppContext} from '../../contexts/app.context';
import {FirstLevelMenuItem, PageItem} from '../../interfaces/menu.interface';
import classnames from 'classnames';
import styles from './Menu.module.css';
import Link from 'next/link';
import {useRouter} from "next/router";
import {firstLevelMenu} from "../../helpers/helpers";
import { motion } from "framer-motion";
import {auto} from "framer-motion/types/render/dom/value-types/type-auto";

export const Menu = () => {
  const {menu, setMenu, firstCategory} = useContext(MyAppContext);
  const router = useRouter();

  const layoutVariants = {
    visible: {
      marginBottom: 20,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1,
      }
    },
    hidden: { marginBottom: 0 },
  };

  const childrenVariants = {
    visible: {
      opacity: 1,
      minHeight: 26,
      maxHeight: 100,
    },
    hidden: {
      opacity: 0,
      minHeight: 0,
      maxHeight: 0,
    },
  };

  const openSecondLevel = (secondCategory: string) => {
    setMenu && setMenu(menu.map((menuItem) => {
      if (menuItem._id.secondCategory === secondCategory) {
        menuItem.isOpened = !menuItem.isOpened;
      }
      return menuItem;
    }));
  };

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((item) => (
          <div key={item.route}>
            <Link href={`/${item.route}`}>
              <a>
                <div className={classnames(styles.firstLevel, {
                  [styles.firstLevelActive]: item.id === firstCategory
                })}>
                  {item.icon}
                  <span>
                    {item.name}
                  </span>
                </div>
              </a>
            </Link>
            {item.id === firstCategory && buildSecondLevel({menuItem: item})}
          </div>
        ))}
      </>
    );
  };

  const buildSecondLevel = ({menuItem}: {menuItem: FirstLevelMenuItem}) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map((m) => {
          if (m.pages.map((page) => page.alias).includes(router.asPath.split('/')[2])) {
            m.isOpened = true;
          }
          return (
            <div key={m._id.secondCategory}>
              <div className={styles.secondLevel} onClick={() => openSecondLevel(m._id.secondCategory)}>
                {m._id.secondCategory}
              </div>
              <motion.div
                layout
                variants={layoutVariants}
                initial={m.isOpened ? "visible" : "hidden"}
                animate={m.isOpened ? "visible" : "hidden"}
                className={classnames(styles.secondLevelBlock)}
              >
                {buildThirdLevel({pages: m.pages, route: menuItem.route})}
              </motion.div>
            </div>

          );
        })}
      </div>
    );
  };

  const buildThirdLevel = ({pages, route}: {pages: PageItem[], route: string}) => {
    return (
      pages.map((page) => (
        <motion.div
          key={page._id}
          variants={childrenVariants}
        >
          <Link href={`/${route}/${page.alias}`}>
            <a className={classnames(styles.thirdLevel, {
              [styles.thirdLevelActive]: `/${route}/${page.alias}` === router.asPath
            })}>
              {page.category}
            </a>
          </Link>
        </motion.div>
      ))
    );
  };

  return (
    <div className={styles.menu}>
      {buildFirstLevel()}
    </div>
  );
};
