import clsx from "clsx";
import { ReactNode } from "react";
import styles from "./styles.module.css";

interface Props {
  forWho: "stranger" | "member";
  title?: ReactNode;
  className?: string;
}

export function Contacts({ forWho, className, title }: Props) {
  return (
    <section id="contacts" className={clsx("flex flex-col block-section", className)}>
      {title && <p className="text-2xl text-center">{title}</p>}
      <div className={styles["two-columns-grid"]}>
        <div>
          <p>Дарья:</p>
        </div>
        <div>
          <p>Алексей:</p>
        </div>
      </div>
      {/* {forWho} */}
    </section>
  );
}
