import styles from'./Menu.module.css';
import React, {useContext} from 'react';
import {MyAppContext} from "../../contexts/app.context";

export const Menu = () => {
  const {menu, setMenu, firstCategory} = useContext(MyAppContext);

  return (
    <div>
      <ul>
        {
          menu.map((item) => (
            <li key={item._id.secondCategory}>{item._id.secondCategory}</li>
          ))
        }
      </ul>
    </div>
  );
};
