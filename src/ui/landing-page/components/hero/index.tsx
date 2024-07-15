import React from "react";
import * as styles from "./hero.module.scss";
import Link from "ui/design-system/link";
import { graphql, useStaticQuery } from "gatsby";

interface SectionHeroBanner {
  category: string;
  content: string;
  linkTo: string;
  linkText: string;
  title: string;
  subtitle: string;
}

const Hero = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "hero section" } }) {
        frontmatter {
          category
          title
          subtitle
          linkTo
          linkText
        }
      }
    }
  `);

  const heroBanner: SectionHeroBanner = markdownRemark?.frontmatter;

  return (
    <div className={styles.heroContainer}>
      <div className="max-w-[874px] mx-auto">
        <h1 className={styles.heading}>
          <span dangerouslySetInnerHTML={{ __html: heroBanner?.title }} />
        </h1>
        <div role="divider" className="mt-3" />
        <p className={styles.subText}>{heroBanner?.subtitle}</p>
        <div className="mt-6 lg:mb-10 flex items-center justify-center">
          <Link
            type="hero"
            showLine={false}
            href={heroBanner.linkTo}
            target="_blank"
          >
            {heroBanner?.linkText}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M14.2218 5.57736L20.9161 10.8058C21.6946 11.4138 21.6946 12.5862 20.9161 13.1942L14.2218 18.4226C13.2193 19.2056 11.75 18.4957 11.75 17.2284L11.75 12.75L4.25 12.75C3.83579 12.75 3.5 12.4142 3.5 12C3.5 11.5858 3.83579 11.25 4.25 11.25L11.75 11.25V6.77159C11.75 5.50429 13.2193 4.79439 14.2218 5.57736Z"
                fill="#16181C"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
