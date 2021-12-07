import type { NextPage } from 'next';
import {Button, Heading, Paragraph, Rating, Tag} from "../components";
import {useState} from "react";

const Home: NextPage = () => {
  const [counter, setCounter] = useState(0);
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

      <Button appearance="primary" hasArrowIcon={true} arrowDirection="down">
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

      <Rating rating={7} />

    </>
  );
};

export default Home;
