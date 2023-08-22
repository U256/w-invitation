import { Hero } from "components/Hero";
import { Contacts } from "components/Contacts";
import { FinalQuirk } from "components/FinalQuirk";
import { Story } from "components/Story";
import { Plan } from "components/Plan";
import { getPath } from "helpers/getPath";
interface Props {
  params: {
    member: string;
  };
}

// TODO:
// уникальные приветствия
// данные пользователей - в бдшшку

async function getData() {
  return { path: getPath() };
}

export default async function Main({ params, ...rest }: Props) {
  // const { guest } = getInfoByPath(path);
  const data = await getData();

  return (
    <main className="flex flex-col justify-between align-middle">
      <Hero />
      <p style={{ opacity: 0 }}>{JSON.stringify(data, null, 2)}</p>
      <Plan />
      <Story />
      <Contacts title="Контакты" />
      <FinalQuirk />
    </main>
  );
}
