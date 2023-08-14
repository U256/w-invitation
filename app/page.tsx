import { Contacts } from "components/Contacts";
// import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <section className="block-section">
        <h1 className="text-7xl f-pixel">Упс</h1>
        <p className="text-2xl f-pixel">эти программисты опять накосячили</p>
        <p className="mt-3">На этой странице ничего нет 🥺</p>
        <br />
        <p className="text-center mt-3">
          {/* TODO: по юзеру решать, вам или тебе */}
          Вам нужно использовать
          <br />
          ссылку-приглашение
        </p>
      </section>
      <Contacts forWho="stranger" title="или написать нам" />
    </main>
  );
}
