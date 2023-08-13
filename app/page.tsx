import Image from 'next/image';
import Countdown from 'components/Countdown';
import { members } from 'members/data';
import styles from './page.module.css';

// TODO:
// 1 обратный отсчет?
// 2 шрифт
// 3 палитра цветов (сайта и одежды)
// 4 Смешной курсор
// 5 daisy ui?
// 6 Картинки венков, картинки мои и даши
// план дня
// карта
// навигация по якорям в хедере

export default function Home() {
  return (
    <main className={styles.main}>
      <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        Get started by editing&nbsp;
        <code className="font-mono font-bold">app/page.tsx</code>
      </p>

      <h1 className="text-3xl font-bold">Приглашаем на свадьбу</h1>
      <h2>Алексей и Дарья</h2>
      <Countdown />

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
