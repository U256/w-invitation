import Image from "next/image";
import { Countdown } from "components/Countdown";
import { members } from "members/data";
import styles from "./page.module.css";

// TODO:
// 2 шрифт++
// 3 палитра цветов +++
// 6 Картинки венков, картинки мои и даши ++

// 1 обратный отсчет?
// 4 Смешной курсор
// 5 daisy ui?
// план дня
// карта
// навигация по якорям в хедере
// favicon - flower

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className="text-3xl font-bold">Приглашаем на свадьбу</h1>
      <h2>
        Алексей
        <span>-- и --</span>
        Дарья
      </h2>
      <Countdown />
      <div style={{ padding: 50, background: "gray", fontSize: 26 }}>
        <div style={{ border: "5px solid var(--clr-background)", color: "var(--clr-background)" }}>clr-background</div>
        <div style={{ border: "5px solid var(--clr-foreground)", color: "var(--clr-foreground)" }}>clr-foreground</div>
        <div style={{ border: "5px solid var(--clr-accent)", color: "var(--clr-accent)" }}>clr-accent</div>
        <div style={{ border: "5px solid var(--clr-content)", color: "var(--clr-content)" }}> clr-content</div>
        <div style={{ border: "5px solid var(--clr-content-sub", color: "var(--clr-content-sub)" }}>
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
