import React, { ReactNode } from "react";
import clsx from "clsx";
import * as styles from "./paragraph.module.scss";

type ParagraphType = "default" | "freestyle";

interface ParagraphProps {
  className?: string;
  type?: ParagraphType;
  children: ReactNode;
}

const Paragraph = ({ className, type = "default", children }: ParagraphProps) => {
  const paragraphClasses = clsx({
    [styles.defaultP]: type === "default",
    [className || '']: type === 'freestyle'
  });
  return <p className={paragraphClasses}>{children}</p>;
};

export default Paragraph;
