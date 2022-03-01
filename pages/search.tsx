import React from 'react';
import {withLayout} from '../HOC/withLayout';
import {GetStaticProps} from "next";
import axios from "axios";
import {MenuItem} from "../interfaces/menu.interface";
import {API} from "../helpers/api";

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
  const {data: menu} = await axios.post<MenuItem[]>(API.topPage.find, {
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
