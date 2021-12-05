import type { NextPage } from 'next';
import {Button, Htag} from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Htag tag="h1">
        Текст
      </Htag>

      <Button appearance="primary">
        Кнопка
      </Button>

      <Button appearance="ghost">
        Кнопка
      </Button>

    </>
  );
};

export default Home;
