import clsx from "clsx";
import { Hero } from "components/Hero";
import { members } from "members/data";
import { Contacts } from "components/Contacts";
import { FinalQuirk } from "components/FinalQuirk";
import { Story } from "components/Story";
import { Plan } from "components/Plan";

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

export default async function Main({ params }: Props) {
  console.log(params.member);
  return (
    <main className="flex flex-col justify-between align-middle">
      <Hero />
      <Plan />
      <Story />
      <Contacts title="Контакты" />
      <FinalQuirk category="coeval" />
    </main>
  );
}
