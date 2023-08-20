import { Hero } from "components/Hero";
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
// уникальные приветствия
// данные пользователей - в бдшшку

export default async function Main({ params }: Props) {
  // const path = getPath();
  // const { guest } = getInfoByPath(path);
  const category = "coeval";
  return (
    <main className="flex flex-col justify-between align-middle">
      <Hero />
      <Plan />
      <Story />
      <Contacts title="Контакты" />
      <FinalQuirk />
    </main>
  );
}
