import Link from "next/link";

export function Header() {
  return (
    <header className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b pb-4 pt-6 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
      <Link href="/#meet" className="mx-2">
        Приглашение
      </Link>
      <Link className="mx-2" href="/#faq">
        Ответы на вопросы
      </Link>
      <Link className="mx-2" href="/#plan">
        Программа
      </Link>
      <Link className="mx-2" href="/#schedule">
        Карты
      </Link>
      <Link className="mx-2" href="/#contacts">
        Контакты
      </Link>
    </header>
  );
}
