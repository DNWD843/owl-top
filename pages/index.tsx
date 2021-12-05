import type { NextPage } from 'next';
import {Button, Htag} from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Htag tag="h1">
        Текст
      </Htag>

      <Button appearance="primary" hasArrowIcon={true} arrowDirection="down">
        Кнопка
      </Button>

      <Button appearance="ghost" hasArrowIcon={true} arrowDirection="right">
        Кнопка
      </Button>

    </>
  );
};

export default Home;
