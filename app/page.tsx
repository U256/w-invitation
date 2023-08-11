import Image from 'next/image';
import { members } from 'members/data';
import styles from './page.module.css';

// TODO:
// 1 обратный отсчет?
// 2 шрифт
// 3 палитра цветов (сайта и одежды)
// 4 Смешной курсор
// 5 daisy ui?
// 6 Картинки венков, картинки мои и даши

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Приглашаем на свадьбу</h1>
      <h2>Алексей и Дарья</h2>

      <Image
        className={styles.logo}
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
    </main>
  );
}
