import React, {useContext} from 'react';
import {MyAppContext} from '../../contexts/app.context';
import {FirstLevelMenuItem, PageItem} from '../../interfaces/menu.interface';
import CoursesIcon from './icons/courses.svg';
import ServicesIcon from './icons/services.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/products.svg';
import {TopLevelCategory} from "../../interfaces/page.interface";
import classnames from 'classnames';
import styles from './Menu.module.css';


const firstLevelMenu: FirstLevelMenuItem[] = [
  {route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses},
  {route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services},
  {route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books},
  {route: 'products', name: 'Продукты', icon: <ProductsIcon />, id: TopLevelCategory.Products},
];

export const Menu = () => {
  const {menu, setMenu, firstCategory} = useContext(MyAppContext);

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((item) => (
          <div key={item.route}>
            <a href={`/${item.route}`}>
              <div className={classnames(styles.firstLevel, {
                [styles.firstLevelActive]: item.id === firstCategory
              })}>
                {item.icon}
                <span>
                  {item.name}
                </span>
              </div>
            </a>
            {item.id === firstCategory && buildSecondLevel({menuItem: item})}
          </div>
        ))}
      </>
    );
  };

  const buildSecondLevel = ({menuItem}: {menuItem: FirstLevelMenuItem}) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map((m) => (
          <div key={m._id.secondCategory}>
            <div className={styles.secondLevel}>
              {m._id.secondCategory}
            </div>
            <div className={classnames(styles.secondLevelBlock, {
              [styles.secondLevelBlockOpened]: m.isOpened
            })}>
              {buildThirdLevel({pages: m.pages, route: menuItem.route})}
            </div>
          </div>

        ))}
      </div>
    );
  };

  const buildThirdLevel = ({pages, route}: {pages: PageItem[], route: string}) => {
    return (
      pages.map((page) => (
        <a key={page.alias} href={`/${route}/${page.alias}`} className={classnames(styles.thirdLevel, {
          [styles.thirdLevelActive]: false
        })}>
          {page.category}
        </a>
      ))
    );
  };

  return (
    <div className={styles.menu}>
      {buildFirstLevel()}
    </div>
  );
};
