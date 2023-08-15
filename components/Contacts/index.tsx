import clsx from "clsx";
import { ReactNode } from "react";
import { InfoColumns } from "components/InfoColumns";
import { List } from "./List";
import { ALEXEY_CONTACTS, DARYA_CONTACTS } from "config";

interface Props {
  title?: ReactNode;
  className?: string;
  showMinimal?: boolean;
}

export function Contacts({ showMinimal, className, title }: Props) {
  return (
    <InfoColumns
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
