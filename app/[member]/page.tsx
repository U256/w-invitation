import { Hero } from "components/Hero";
// import { members } from "members/data";
import { Contacts } from "components/Contacts";
import { FinalQuirk } from "components/FinalQuirk";
import { Story } from "components/Story";
import { Plan } from "components/Plan";
import { UNKNOWN_GUEST } from "config";
import { getPath } from "helpers/getPath";

interface Props {
  params: {
    member: string;
  };
}

// TODO:
// картинки мои и даши
// уникальные приветствия
// данные пользователей - в бдшшку
// animation or picture of discoball


export default async function Main({ params }: Props) {
  const path = getPath();
  if (path?.includes(UNKNOWN_GUEST)) {
    console.log(params.member);
  }
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
