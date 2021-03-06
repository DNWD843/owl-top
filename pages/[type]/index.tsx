import React from 'react';
import {withLayout} from "../../HOC/withLayout";
import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from "next";
import axios from "axios";
import {MenuItem} from "../../interfaces/menu.interface";
import {firstLevelMenu} from "../../helpers/helpers";
import {API} from "../../helpers/api";

function Type({firstCategory}: TypeProps): JSX.Element {
  return (
    <>
      Type Page: Category
      {` ${firstCategory}`}
    </>
  );
}

export default withLayout(Type);

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: firstLevelMenu.map((menu) => `/${menu.route}`),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<TypeProps> = async ({params}) => {
  if (!params) {
    return {
      notFound: true
    };
  }
  const firstCategoryItem = firstLevelMenu.find(menuItem => menuItem.route === params.type);

  if (!firstCategoryItem) {
    return {
      notFound: true
    };
  }
  const {data: menu} = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory: firstCategoryItem.id
  });
  return {
    props: {
      menu,
      firstCategory: firstCategoryItem.id,
    }
  };
};

// этот интерфейс объявили тут, потому что в pages должны лежать только файлы страниц!
interface TypeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
