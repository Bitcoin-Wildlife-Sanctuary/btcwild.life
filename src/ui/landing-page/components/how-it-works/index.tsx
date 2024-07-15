import React from "react";
import {
  GatsbyImage,
  IGatsbyImageData,
  ImageDataLike,
  getImage,
} from "gatsby-plugin-image";
import * as styles from "./how-it-works.module.scss";
import Card from "ui/design-system/card";
import Heading from "ui/design-system/typography/heading";
import Paragraph from "ui/design-system/typography/paragraph";
import { graphql, useStaticQuery } from "gatsby";

interface Iinfo {
  title: string;
  content: string;
  url?: string;
}
interface IHowItWorks {
  category: string;
  featuredImage: ImageDataLike;
  info: Iinfo[];
}

const HowItWorks = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(
        frontmatter: { category: { eq: "how-it-works-section" } }
      ) {
        frontmatter {
          category
          featuredImage {
            childImageSharp {
              gatsbyImageData
            }
          }
          info {
            title
            content
            url
          }
        }
      }
    }
  `);

  const howItWorksData: IHowItWorks = markdownRemark?.frontmatter;

  return (
    <div className={styles.howItWorksContainer}>
      <Heading type="title">Here's how it works</Heading>

      <div role="divider" className="mt-12" />

      <div className="flex flex-col lg:flex-row items-stretch gap-4 lg:mx-auto">
        <div className="w-full lg:w-6/12">
          <div className={styles.sectionImageContainer}>
            <GatsbyImage
              className={styles.honeyImage}
              image={
                getImage(howItWorksData?.featuredImage) as IGatsbyImageData
              }
              alt="how-it-works-img"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full lg:w-6/12">
          {howItWorksData?.info &&
            howItWorksData?.info.map((curr, idx) => {
              return (
                <Card type="default" key={idx}>
                  <Heading>{curr.title}</Heading>
                  <div role="divider" className="mt-2" />
                  <Paragraph>
                    <span dangerouslySetInnerHTML={{ __html: curr.content }} />
                  </Paragraph>
                </Card>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
