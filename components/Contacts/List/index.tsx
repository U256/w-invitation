import { Contacts } from "config";
import WaIcon from "public/images/socials/whatsapp.svg";
import TgIcon from "public/images/socials/telegram.svg";
import PhoneIcon from "public/images/socials/phone.svg";
import styles from "./styles.module.css";

interface Props extends Contacts {
  who: string;
  wa: string;
  tg?: string;
  phone?: string;
}

export function List({ who, wa, tg, phone }: Props) {
  return (
    <>
      <p className="text-xl">{who}</p>
      <ul className={styles.ul}>
        <a href={wa} target="_blank">
          <WaIcon width={24} height={24} />
          WhatsApp
        </a>
        {tg && (
          <a href={wa} target="_blank">
            <TgIcon width={24} height={24} />
            Telegram
          </a>
        )}
        {phone && (
          <a href={`tel:${phone}`}>
            <PhoneIcon width={24} height={24} style={{ transform: "scale(1.1)" }} />
            По телефону
          </a>
        )}
      </ul>
    </>
  );
}
