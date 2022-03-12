import type {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from 'next';
import {withLayout} from '../../HOC/withLayout';
import axios from 'axios';
import {MenuItem} from "../../interfaces/menu.interface";
import {TopLevelCategory, TopPageModel} from "../../interfaces/page.interface";
import {ProductModel} from "../../interfaces/product.interface";
import {firstLevelMenu} from "../../helpers/helpers";
import {TopPageComponent} from "../../page-components";
import {API} from "../../helpers/api";
import Head from 'next/head';
import {NotFoundPage} from "../404";

const TopPage = ({firstCategory, page, products}: TopPageProps) => {
  if (!page || !products) return (
    <NotFoundPage />
  );

  return (
    <>
      <Head>
        <title>{page.metaTitle}</title>
        <meta name="description" content={page.metaDescription} />
        <meta property="og:title" content={page.metaTitle} />
        <meta property="og:description" content={page.metaDescription} />
        <meta property="og:type" content="article" />
      </Head>
      <TopPageComponent
        firstCategory={firstCategory}
        page={page}
        products={products}
      />
    </>
  );
};

export default withLayout(TopPage);

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: string[] = [];
  for (const menuItem of firstLevelMenu) {
    const {data: menu} = await axios.post<MenuItem[]>(API.topPage.find, {
      firstCategory: menuItem.id
    });
    paths = paths.concat(menu.flatMap((elem) => elem.pages.map((page) => `/${menuItem.route}/${page.alias}`)));
  }

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<TopPageProps> = async ({params}) => {
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
    const {data: menu} = await axios.post<MenuItem[]>(API.topPage.find, {
      firstCategory: firstCategoryItem.id
    });

    if (!menu?.length) {
      return {
        notFound: true
      };
    }

    const {data: page} = await axios.get<TopPageModel>( API.topPage.byAlias + params.alias);
    const {data: products} = await axios.post<ProductModel[]>(API.product.find, {
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
interface TopPageProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
  page: TopPageModel;
  products: ProductModel[];
}
