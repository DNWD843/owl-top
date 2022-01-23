import React from 'react';
import {withLayout} from '../HOC/withLayout';
import {GetStaticProps} from "next";
import axios from "axios";
import {MenuItem} from "../interfaces/menu.interface";

function Search(): JSX.Element {
  return (
    <>
      This is searchpage
    </>
  );
}

export default withLayout(Search);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });
  return {
    props: {
      menu,
      firstCategory,
    }
  };
};

// этот интерфейс объявили тут, потому что в pages должны лежать только файлы страниц!
interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
