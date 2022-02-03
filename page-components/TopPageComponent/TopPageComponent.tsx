import React from "react";
import {TopPageComponentProps} from "./TopPageComponent.props";
import styles from './TopPageComponent.module.css';
import {Advantages, Heading, Paragraph, Tag} from "../../components";
import {HhData} from "../../components/HHData/HhData";
import {TopLevelCategory} from "../../interfaces/page.interface";

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Heading>{page.title}</Heading>
        {
          products?.length && <Tag color="grey" size="medium">{products.length}</Tag>
        }
        <span>Sorting</span>
      </div>
      <div>
        {products?.length && (products.map((product) => (<div key={product._id}>{product.title}</div>)))}
      </div>

      <div className={styles.hhTitle}>
        <Heading type="h2">{`Вакансии — ${page.category}`}</Heading>
        {
          products?.length && <Tag color="red" size="medium">hh.ru</Tag>
        }
      </div>

      {
        (firstCategory === TopLevelCategory.Courses) && page?.hh
          ? (<HhData {...page.hh} />)
          : null
      }
      {
        !!page?.advantages?.length && (
          <>
            <Heading type="h2">Преимущества</Heading>
            <Advantages advantages={page.advantages} />
          </>
        )
      }
      {
        page?.seoText && (<div className={styles.seo} dangerouslySetInnerHTML={{__html: page.seoText}}/>)
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
