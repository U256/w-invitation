import Link from "next/link";
import grape2 from "public/images/grape2.svg";
import Image from "next/image";
import { getPath } from "helpers/getPath";

export function Header() {
  const path = getPath();

  return (
    <header className="fixed left-0 top-0 py-3 flex w-full justify-center items-center border-b">
      <Image
        src={grape2}
        width="608"
        height="236"
        alt="украшение"
        className="relative w-10"
        style={{ transform: "rotate(90deg) scaleX(-1)" }}
      />
      {path === "/" ? (
        <p>Добрый день!</p>
      ) : (
        <nav>
          <Link href="/#meet" className="mx-2">
            Приглашение
          </Link>
          <Link className="mx-3" href="/#faq">
            Ответы на вопросы
          </Link>
          <Link className="mx-3" href="/#plan">
            Программа
          </Link>
          <Link className="mx-3" href="/#schedule">
            Карты
          </Link>
          <Link className="mx-3" href="/#contacts">
            Контакты
          </Link>
        </nav>
      )}
      <Image
        src={grape2}
        width="608"
        height="236"
        alt="украшение"
        className="relative w-10"
        style={{ transform: "rotate(270deg)" }}
      />
    </header>
  );
}
