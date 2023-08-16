import clsx from "clsx";
import { Hero } from "components/Hero";
import { members } from "members/data";
import { Contacts } from "components/Contacts";
import { FinalQuirk } from "components/FinalQuirk";
import { Story } from "components/Story";
import { Plan } from "components/Plan";
import styles from "./page.module.css";
import dayjs from "dayjs";
import { DATE } from "config";

interface Props {
  params: {
    member: string;
  };
}

// TODO:
// replace font with smth more fun
// картинки мои и даши
// уникальные приветствия
// emojis

export default function Main({ params }: Props) {
  console.log(params.member);
  return (
    <main className={clsx("flex flex-col justify-between align-middle", styles.main)}>
      <Hero />
      <Plan />
      <Story />
      <Contacts title="Контакты" />

      <section id="faq">Ответы на вопросы</section>
      <section id="schedule">Карты</section>

      <FinalQuirk category="coeval" />
    </main>
  );
}
