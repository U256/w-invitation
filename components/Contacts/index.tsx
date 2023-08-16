import { ReactNode } from "react";
import Image from "next/image";
import socialsIcon from "public/images/socials/social-media.png";
import { ALEXEY_CONTACTS, DARYA_CONTACTS } from "config";
import { InfoColumns } from "components/InfoColumns";
import { List } from "./List";
import styles from "./styles.module.css";

interface Props {
  title?: ReactNode;
  className?: string;
  showMinimal?: boolean;
}

export function Contacts({ showMinimal, className, title }: Props) {
  return (
    <InfoColumns
      id="contacts"
      before={<Image src={socialsIcon} width={50} height={50} className={styles["title-icon"]} alt="" />}
      title={title}
      className={className}
      contentLeft={
        <List
          who="Алексей"
          wa={ALEXEY_CONTACTS.wa}
          tg={showMinimal ? "" : ALEXEY_CONTACTS.tg}
          phone={showMinimal ? "" : ALEXEY_CONTACTS.phone}
        />
      }
      contentRight={
        <List
          who="Дарья"
          wa={DARYA_CONTACTS.wa}
          tg={showMinimal ? "" : DARYA_CONTACTS.tg}
          phone={showMinimal ? "" : DARYA_CONTACTS.phone}
        />
      }
    />
  );
}
