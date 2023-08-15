import { Contacts } from "config";
import Image from "next/image";
import waIcon from "public/images/socials/whatsapp.svg";
import tgIcon from "public/images/socials/telegram.svg";
import phoneIcon from "public/images/socials/phone.svg";
import styles from "./styles.module.css";

interface Props extends Contacts {
  who: string;
  wa: string;
  tg?: string;
  phone?: string;
}

export function List({ who, wa, tg, phone }: Props) {
  // TODO: svg as svg
  //  and link hover-focus-active
  //  replace font with smth more fun
  return (
    <>
      <p className="text-lg">{who}</p>
      <ul className={styles.ul}>
        <a href={wa} target="_blank">
          <Image src={waIcon} width={24} height={24} alt=""></Image>
          WhatsApp
        </a>
        {tg && (
          <a href={wa} target="_blank">
            <Image src={tgIcon} width={24} height={24} alt=""></Image>
            Telegram
          </a>
        )}
        {phone && (
          <a href={`tel:${phone}`}>
            <Image src={phoneIcon} width={24} height={24} alt=""></Image>
            По телефону
          </a>
        )}
      </ul>
    </>
  );
}
