import React, {useReducer} from "react";
import {TopPageComponentProps} from "./TopPageComponent.props";
import styles from './TopPageComponent.module.css';
import {Advantages, Heading, Product, Sort, Tag} from "../../components";
import {HhData} from "../../components/HHData/HhData";
import {TopLevelCategory} from "../../interfaces/page.interface";
import {SortEnum} from "../../components/Sort/Sort.props";
import {sortReducer} from "./sort.reducer";

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {
  const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(sortReducer, {products, sort: SortEnum.Rating});

  const setSort = (sort: SortEnum) => {
    dispatchSort({ type: sort});
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Heading>{page?.title}</Heading>
        {
          products?.length && <Tag color="grey" size="medium">{products.length}</Tag>
        }
        <Sort  setSort={setSort} sort={sort}/>
      </div>
      <div>
        {sortedProducts?.length && (sortedProducts.map((product) => (<Product key={product._id} product={product} />)))}
      </div>

      <div className={styles.hhTitle}>
        <Heading type="h2">{`Вакансии — ${page?.category}`}</Heading>
        {
          products?.length && <Tag color="red" size="medium">hh.ru</Tag>
        }
      </div>

      {
        (firstCategory === TopLevelCategory.Courses) && page?.hh
          ? (<HhData {...page?.hh} />)
          : null
      }
      {
        !!page?.advantages?.length && (
          <>
            <Heading type="h2">Преимущества</Heading>
            <Advantages advantages={page?.advantages} />
          </>
        )
      }
      {
        page?.seoText && (<div className={styles.seo} dangerouslySetInnerHTML={{__html: page?.seoText}}/>)
      }
      <Heading type="h2">Получаемые навыки</Heading>
      {
        page?.tags?.map((tag) => (
          <Tag key={tag} color="primary">{tag}</Tag>
        ))
      }
    </div>
  );
};
