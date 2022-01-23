import type {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from 'next';
import {withLayout} from '../../HOC/withLayout';
import {useState} from 'react';
import axios from 'axios';
import {MenuItem} from "../../interfaces/menu.interface";
import {TopLevelCategory, TopPageModel} from "../../interfaces/page.interface";
import {ProductModel} from "../../interfaces/product.interface";
import {firstLevelMenu} from "../../helpers/helpers";

const Course = ({menu, page, products}: CourseProps) => {
  const [rating, setRating] = useState(0);
  return (
    <>
      {
        products?.length || 'no products founded'
      }
    </>
  );
};

export default withLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: string[] = [];
  for (const menuItem of firstLevelMenu) {
    const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
      firstCategory: menuItem.id
    });
    paths = paths.concat(menu.flatMap((elem) => elem.pages.map((page) => `/${menuItem.route}/${page.alias}`)));
  }

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<CourseProps> = async ({params}) => {
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
  try {
    const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
      firstCategory: firstCategoryItem.id
    });

    if (!menu?.length) {
      return {
        notFound: true
      };
    }

    const {data: page} = await axios.get<TopPageModel>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias);
    const {data: products} = await axios.post<ProductModel[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find', {
      category: page.category,
      limit: 10,
    });
    return {
      props: {
        menu,
        firstCategory: firstCategoryItem.id,
        page,
        products,
      }
    };
  } catch {
    return {
      notFound: true
    };
  }

};

// этот интерфейс объявили тут, потому что в pages должны лежать только файлы страниц!
interface CourseProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
  page: TopPageModel;
  products: ProductModel[];
}
