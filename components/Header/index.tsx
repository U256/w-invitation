import grape2 from "public/images/grape2.svg";
import dayjs from "dayjs";
import Image from "next/image";
import { getPath } from "helpers/getPath";
import { TimeOfDay } from "components/TimeOfDay";

export function Header() {
  const path = getPath();
  console.log(dayjs(new Date("12 dec 2023 16:30")).hour());

  return (
    <header className="fixed left-0 top-0 py-3 flex w-full justify-center items-center border-b bg-inherit z-10">
      <Image
        src={grape2}
        width="608"
        height="236"
        alt="украшение"
        className="relative w-10"
        style={{ transform: "rotate(90deg) scaleX(-1)" }}
      />
      {path === "/" ? (
        <p><TimeOfDay />!</p>
      ) : (
        <nav>
          <a className="mx-2" href={`${path}#meet`}>
            Приглашение
          </a>
          <a className="mx-3" href={`${path}#faq`}>
            Ответы на вопросы
          </a>
          <a className="mx-3" href={`${path}#plan`}>
            Программа
          </a>
          <a className="mx-3" href={`${path}#schedule`}>
            Карты
          </a>
          <a className="mx-3" href={`${path}#contacts`}>
            Контакты
          </a>
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
