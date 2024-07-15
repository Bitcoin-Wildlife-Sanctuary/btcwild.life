import React, { ReactNode } from "react";
import clsx from "clsx";
import * as styles from "./heading.module.scss";

type HeadingType = "default" | "title" | "freestyle";

interface HeadingProps {
  className?: string;
  type?: HeadingType;
  children: ReactNode;
}

const Heading = ({ className, type = "default", children }: HeadingProps) => {
  const HeadingClasses = clsx({
    [styles.defaultH]: type === "default",
    [styles.sectionTitle]: type === 'title',
    [className || '']: type === 'freestyle'
  });
  return <p className={HeadingClasses}>{children}</p>;
};

export default Heading;
