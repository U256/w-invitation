import grape2 from "public/images/grape2.svg?url";
import Image from "next/image";
import { getPath } from "helpers/getPath";
import { TimeOfDay } from "components/TimeOfDay";

interface Link {
  text: string;
  link: string;
}
const LINKS: Link[] = [
  { text: "Приглашение", link: "#meet" },
  { text: "Вопросы", link: "#faq" },
  { text: "Программа", link: "#plan" },
  { text: "Карты", link: "#maps" },
  { text: "Контакты", link: "#contacts" },
];

export function Header() {
  const path = getPath();
  return (
    <header className="fixed left-0 top-0 py-1 md:py-3 flex w-full justify-center items-center border-b bg-inherit z-10">
      <Image
        src={grape2}
        width="608"
        height="236"
        alt="украшение"
        className="relative w-10"
        style={{ transform: "rotate(90deg) scaleX(-1)" }}
      />
      {path === "/" ? (
        <p>
          <TimeOfDay />!
        </p>
      ) : (
        <nav className=" flex flex-wrap justify-center">
          {LINKS.map((l) => (
            <a key={l.text} className="mx-2 my-2 md:mx-3 md:my-0" href={`${path}${l.link}`}>
              {l.text}
            </a>
          ))}
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
