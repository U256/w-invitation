import { HTMLAttributes, ReactNode } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";

interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  title?: ReactNode;
  contentLeft: ReactNode;
  contentRight: ReactNode;
}

export function InfoColumns({ title, className, contentLeft, contentRight, ...restProps }: Props) {
  return (
    <section className={clsx("block-section", styles.wrapper, className)} {...restProps}>
      {title && <p className="text-2xl text-center">{title}</p>}
      <div className={clsx(styles["two-columns-grid"], "mt-1")}>
        <div>{contentLeft}</div>
        <div>{contentRight}</div>
      </div>
    </section>
  );
}
