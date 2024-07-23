import React from "react";
import * as styles from "./about-us.module.scss";
import {
  GatsbyImage,
  IGatsbyImageData,
  ImageDataLike,
  StaticImage,
  getImage,
} from "gatsby-plugin-image";
import Paragraph from "ui/design-system/typography/paragraph";
import { graphql, useStaticQuery } from "gatsby";

interface IAboutUs {
  category: string;
  content: string;
  featuredImage: ImageDataLike;
}

const AboutUs = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "about-us-section" } }) {
        frontmatter {
          category
          content
          featuredImage {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);

  const aboutUsData: IAboutUs = markdownRemark?.frontmatter;

  return (
    <div className={styles.aboutUsContainer}>
      <div className="hidden md:block absolute md:-top-10 lg:-top-20 left-10 xl:left-20">
        <StaticImage
          src="../../../../images/pngs/Honey-Badger-01.png"
          alt={"badger"}
        />
      </div>

      <div className="mx-auto max-w-[839px] flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="w-full lg:w-6/12">
          <Paragraph
            type="freestyle"
            className="text-white text-center lg:text-right font-jura text-xl font-semibold leading-[160%]"
          >
            {aboutUsData?.content}
          </Paragraph>
        </div>

        <div className="w-full lg:w-6/12">
          <GatsbyImage
            className="h-auto w-full max-h-full max-w-full"
            image={getImage(aboutUsData?.featuredImage) as IGatsbyImageData}
            alt="about-us-img"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
