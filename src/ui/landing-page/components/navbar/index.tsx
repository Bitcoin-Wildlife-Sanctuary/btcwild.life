import React, { useEffect, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import clsx from "clsx";
import * as styles from "./navbar.module.scss";
import Link from "ui/design-system/link";
import Logo from "ui/design-system/logo";
import useScrollNavbar from "utils/useScrollbar";
import HamburgerOpen from "../../../../images/svgs/hamburger-open.svg";
import HamburgerClose from "../../../../images/svgs/hamburger-close.svg";
import MobileNavbar from "./components/mobile";

interface IQuickLink {
  title: string;
  linkType: "ghost" | "outline";
  url?: string;
}
export interface INavbar {
  category: string;
  quickLinks: IQuickLink[];
}

const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState<boolean>(false);
  const { isSticky, element } = useScrollNavbar();

  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "navbar-section" } }) {
        frontmatter {
          category
          quickLinks {
            title
            linkType
            url
          }
        }
      }
    }
  `);

  const navbarSection: INavbar = markdownRemark?.frontmatter;

  const openNavbarAction = () => {
    setOpenNavbar(() => !openNavbar);
  };

  const onResize = () => {
    setOpenNavbar(() => false);
  };

  const navContainerClasses = clsx(styles.navContainer, {
    [styles.isSticky]: isSticky,
  });

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    openNavbar
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [openNavbar]);

  return (
    <>
      <div
        className={navContainerClasses}
        ref={element as React.MutableRefObject<HTMLDivElement>}
        data-is-expanded={openNavbar}
      >
        <div className={styles.logoContainer}>
          <Logo />
          <div onClick={openNavbarAction} className={styles.hamburgerOutline}>
            {!openNavbar && <HamburgerOpen />}
            {openNavbar && <HamburgerClose />}
          </div>
        </div>

        <div className={styles.quickLinks}>
          {navbarSection?.quickLinks &&
            navbarSection?.quickLinks.map((curr, idx) => {
              return (
                <div
                  key={idx}
                  className={clsx({
                    "-mx-2 lg:mx-0": curr?.linkType === "ghost",
                  })}
                >
                  <Link
                    type={curr?.linkType || "ghost"}
                    href={curr?.url || "#"}
                  >
                    {curr.title}
                  </Link>
                </div>
              );
            })}
        </div>

        <MobileNavbar
          navbarSection={navbarSection}
          openNavbar={openNavbar}
          openNavbarAction={openNavbarAction}
        />
      </div>
    </>
  );
};

export default Navbar;
