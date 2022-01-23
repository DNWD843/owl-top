import type {GetStaticProps, NextPage} from 'next';
import {Button, Heading, Paragraph, Rating, Tag} from '../components';
import {withLayout} from '../HOC/withLayout';
import {useState} from 'react';
import axios from 'axios';
import {MenuItem} from "../interfaces/menu.interface";

const HomePage = ({menu}: HomeProps) => {
  const [rating, setRating] = useState(3);
  const [data, setData] = useState<MenuItem[]>([]);
  return (
    <>
      <Heading type="h1">
        Заголовок первого уровня
      </Heading>

      <Heading type="h2">
        Заголовок второго уровня
      </Heading>

      <Heading type="h3">
        Заголовок третьего уровня
      </Heading>

      <Heading className="default">
        дефолтный Заголовок
      </Heading>

      <Button
        appearance="primary"
        hasArrowIcon={true}
        arrowDirection="down"
        onClick={async () => {
          const firstCategory = 0;
          const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
            firstCategory
          });
          setData(menu);
        }}
      >
        Кнопка
      </Button>

      <Button appearance="ghost" hasArrowIcon={true} arrowDirection="right">
        Кнопка
      </Button>

      <Paragraph type="p1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </Paragraph>

      <Paragraph type="p2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </Paragraph>

      <Paragraph type="p3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </Paragraph>

      <Tag>small GHOST</Tag>
      <Tag size="small" color="red">small Tag red</Tag>
      <Tag size="medium" color="green">medium Tag green</Tag>
      <Tag size="medium" color="primary">medium Tag primary</Tag>
      <Tag size="medium" href="#" color="grey">medium Tag grey</Tag>

      <Rating
        isEditable
        rating={rating}
        setRating={setRating}
      />

      <ol>
        {
          data.map((item) => (
            <li key={item._id.secondCategory}>{item.pages.map(page => page.title).join('/')}</li>
          ))
        }
      </ol>

    </>
  );
};

export default withLayout(HomePage);

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
