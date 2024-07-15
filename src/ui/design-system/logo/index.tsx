import React from "react";
import Paragraph from "../typography/paragraph";
import * as styles from "./logo.module.scss";
import { Link } from "gatsby";
import BitcoinWildlifeLogo from "../../../images/svgs/bitcoin-wildlife-logo.svg";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2 lg:gap-4">
      <BitcoinWildlifeLogo />
      <Paragraph type="freestyle" className={styles.logoText}>
        Bitcoin Wildlife Conservation
      </Paragraph>
    </Link>
  );
};

export default Logo;
