import "./styles.css";
import Grape1 from "public/images/grape1.svg";

export function Story() {
  return (
    <section id="story" className="block-section" style={{ maxWidth: 450 }}>
      <p className="text-2xl font-medium">Дорогие друзья!</p>
      <p className="mt-2">Жить, любить, чувствовать.</p>
      <p>
        Делать{" "}
        <span className="fancy">
          <span>с</span>
          <span>т</span>
          <span>р</span>
          <span>а</span>
          <span>н</span>
          <span>н</span>
          <span>ы</span>
          <span>е</span>
          &nbsp;
          <span>ш</span>
          <span>т</span>
          <span>у</span>
          <span>к</span>
          <span>и</span>
        </span>{" "}
        с браузером.
      </p>
      <p>
        Однажды мы поняли, что нет ничего важнее этого. И что идти дальше мы хотим только вместе. А теперь мечтаем,
        чтобы день нашей свадьбы стал красивым и ярким событием на этом увлекательном пути.
      </p>
      <p>Мы будем очень рады, если вы разделите этот счастливый день с нами.</p>
      <p>Увидимся на нашей свадьбе!</p>
      <p className="heart text-3xl">❤️</p>
      <Grape1 className="grape1-adornment" />
    </section>
  );
}
