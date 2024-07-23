import React, { ReactNode } from "react";
import * as styles from "./card.module.scss";
import clsx from "clsx";

type CardType = "default" | "communityCard";

interface CardProps {
  type?: CardType;
  children: ReactNode;
}

const Card = ({ type = "default", children }: CardProps) => {
  const cardClasses = clsx({
    [styles.defaultCard]: type === "default",
    [styles.communityCard]: type === "communityCard",
  });
  return <div className={cardClasses}>{children}</div>;
};

export default Card;
