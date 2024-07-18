import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import * as styles from "./footer.module.scss";
import Paragraph from "ui/design-system/typography/paragraph";
import Logo from "ui/design-system/logo";
import Link from "ui/design-system/link";

interface ISocialLink {
  title: string;
  content: string;
  url?: string;
  featuredImage?: { publicURL: string };
}
interface IQuickLink {
  title: string;
  url?: string;
}
interface IFooter {
  category: string;
  title: string;
  subTitle: string;
  quickLinks: IQuickLink[];
  socialLinks: ISocialLink[];
}

const Footer = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "footer-section" } }) {
        frontmatter {
          category
          title
          subTitle
          quickLinks {
            title
            url
          }
          socialLinks {
            title
            url
            featuredImage {
              publicURL
            }
          }
        }
      }
    }
  `);

  const footerSection: IFooter = markdownRemark?.frontmatter;

  return (
    <div className={styles.footerContainer}>
      <div className="mb-10 max-w-[591px]">
        <Paragraph type="freestyle" className={styles.subText}>
          {footerSection?.subTitle}
        </Paragraph>
      </div>

      <div>
        {/* <div dangerouslySetInnerHTML={{ __html: footerSection?.title }} /> */}
        <h1 className="text-white font-dmSans text-[40px] lg:text-5xl font-bold leading-normal">
          Join us, and let’s make{" "}
          <span className="text-bitcoinWildlifeYellow">
            &nbsp;Bitcoin&nbsp;
          </span>{" "}
          a force for good!
        </h1>
      </div>

      <div className="my-20 border-t border-[#4E515A] border-dashed h-px" />

      <div className="gap-y-6 lg:gap-y-0 flex flex-wrap justify-between lg:flex-nowrap">
        <div className="w-full lg:w-auto">
          <Logo />
        </div>

        <div className="flex gap-6">
          {footerSection?.quickLinks &&
            footerSection?.quickLinks.map((curr, idx) => {
              return (
                <div key={idx}>
                  <Link type="ghost" href={curr?.url || "#"}>
                    {curr?.title}
                  </Link>
                </div>
              );
            })}
        </div>

        <div className="flex gap-4 lg:gap-6">
          {footerSection?.socialLinks &&
            footerSection?.socialLinks.map((curr, idx) => {
              return (
                <div key={idx}>
                  <Link
                    showLine={false}
                    type="inverted"
                    href={curr?.url || "#"}
                  >
                    <img src={curr?.featuredImage?.publicURL as string} />
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
