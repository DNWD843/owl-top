import {Heading} from "../components";
import Link from 'next/link';
import {withLayout} from "../HOC/withLayout";
import styles from './404.module.css';

export const NotFoundPage = () => (
  <div className={styles.notFound}>
    <Heading className={styles.title} type="h1">Страница не найдена или не существует</Heading>
    <Link href='/'>Вернуться на главную</Link>
  </div>
);

export default withLayout(NotFoundPage);
