import {createContext, PropsWithChildren, ReactNode, useState} from "react";
import {MenuItem} from "../interfaces/menu.interface";
import {TopLevelCategory} from "../interfaces/page.interface";

export interface IAppContext {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
  setMenu?: (newMenu: MenuItem[]) => void;
}

export const MyAppContext = createContext<IAppContext>({
  menu: [],
  firstCategory: TopLevelCategory.Courses,
});

export const AppContextProvider = ({menu = [], firstCategory, children}: PropsWithChildren<IAppContext>) => {
  const [menuState, setMenuState] = useState<MenuItem[]>(menu);

  const setMenu = (newMenu:MenuItem[]) => {
    setMenuState(newMenu);
  };

  return (
    <MyAppContext.Provider value={{
      menu: menuState,
      firstCategory,
      setMenu,
    }}>
      {children}
    </MyAppContext.Provider>
  );
};
