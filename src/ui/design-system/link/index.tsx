import React, { ReactNode } from "react";
import * as styles from "./link.module.scss";
import clsx from "clsx";

type LinkElement = React.ElementRef<"a">;

type LinkType =
  | "ghost"
  | "outline"
  | "inverted"
  | "communityLink"
  | "hero"
  | "freestyle";

type LinkProps = {
  target?: string;
  showLine?: boolean;
  className?: string;
  href: string;
  type?: LinkType;
  children: ReactNode;
} & React.LinkHTMLAttributes<LinkElement>;

const Link = ({
  children,
  type,
  href,
  className,
  showLine = true,
  target,
  ...rest
}: LinkProps) => {
  const LinkClasses = clsx({
    [styles.ghost]: type === "ghost",
    [styles.outline]: type === "outline",
    [styles.inverted]: type === "inverted",
    [styles.communityLink]: type === "communityLink",
    [styles.hero]: type === "hero",
    [className || ""]: type === "freestyle",
  });

  return (
    <a {...rest} target={target} className={LinkClasses} href={href || ""}>
      {showLine && <>&nbsp; // &nbsp;</>}
      {children}
    </a>
  );
};

export default Link;
