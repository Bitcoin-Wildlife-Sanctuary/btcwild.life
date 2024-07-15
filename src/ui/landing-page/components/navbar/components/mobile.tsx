import React from "react";
import clsx from "clsx";
import * as styles from "../navbar.module.scss";
import Link from "ui/design-system/link";
import { INavbar } from "..";
import Logo from "ui/design-system/logo";
import HamburgerOpen from "../../../../../images/svgs/hamburger-open.svg";
import HamburgerClose from "../../../../../images/svgs/hamburger-close.svg";

interface MobileNavbarProps {
  navbarSection: INavbar;
  openNavbar: boolean;
  openNavbarAction: () => void;
}

const MobileNavbar = ({
  navbarSection,
  openNavbar,
  openNavbarAction,
}: MobileNavbarProps) => {
  return (
    <>
      {openNavbar && (
        <div
          className={styles.overlayContainer}
          onClick={(e) => {
            e.stopPropagation();
            openNavbarAction();
          }}
        >
          <div className={styles.mobileNavContainer}>
            <div className={styles.logoContainer}>
              <Logo />
              <div
                onClick={openNavbarAction}
                className={styles.hamburgerOutline}
              >
                {!openNavbar && <HamburgerOpen />}
                {openNavbar && <HamburgerClose />}
              </div>
            </div>

            <div className={styles.quickLinksMobile}>
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
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNavbar;
