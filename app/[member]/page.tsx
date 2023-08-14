import { Hero } from "components/Hero";
import { members } from "members/data";
import styles from "./page.module.css";
import { Countdown } from "components/Countdown";
import { Contacts } from "components/Contacts";
import clsx from "clsx";

interface Props {
  params: {
    member: string;
  };
}

export default function Main({ params }: Props) {
  return (
    <main className={clsx("flex flex-col justify-between align-middle", styles.main)}>
      <Hero />
      <Countdown />

      <Contacts forWho="member" title="Контакты" />
      {/* get rid of it */}
      <p className="mt-11 mb-6 border-2 p-3">{params.member}</p>

      <section id="faq">Ответы на вопросы</section>
      <section id="plan">Программа</section>
      <section id="schedule">Карты</section>
      

      <br />
      <div className="block-section w-3" style={{ padding: 50, background: "gray", fontSize: 26 }}>
        <div style={{ border: "5px solid var(--clr-background)", color: "var(--clr-background)" }}>clr-background</div>
        <div style={{ border: "5px solid var(--clr-foreground)", color: "var(--clr-foreground)" }}>clr-foreground</div>
        <div style={{ border: "5px solid var(--clr-accent)", color: "var(--clr-accent)" }}>clr-accent</div>
        <div style={{ border: "5px solid var(--clr-content)", color: "var(--clr-content)" }}> clr-content</div>
        <div style={{ border: "5px solid var(--clr-content-sub)", color: "var(--clr-content-sub)" }}>
          clr-content-sub
        </div>
      </div>
      <div style={{ padding: 50 }}>
        <p>
          jost
          <br />
          Приглашаем на свадьбу Дарьи и Алексея. Будем рады видеть вас. friendship000
        </p>
        <br />
        <p style={{ fontFamily: "var(--font-pixel)" }}>
          handjet
          <br /> Приглашаем на свадьбу Дарьи и Алексея. Будем рады видеть вас. friendship000
        </p>
        <br />
        <p style={{ fontFamily: "var(--font-handwritten)" }}>
          caveat
          <br />
          Приглашаем на свадьбу Дарьи и Алексея. Будем рады видеть вас. friendship000
        </p>
      </div>
    </main>
  );
}
