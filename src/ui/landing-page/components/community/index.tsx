import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import {
  GatsbyImage,
  IGatsbyImageData,
  ImageDataLike,
  getImage,
} from "gatsby-plugin-image";
import Heading from "ui/design-system/typography/heading";
import Paragraph from "ui/design-system/typography/paragraph";
import * as styles from "./community.module.scss";
import Card from "ui/design-system/card";
import GlobeSection from "./components/globe";
import CommunityHeader from "./components/community-header";
import Link from "ui/design-system/link";

interface Iinfo {
  title: string;
  content: string;
  url?: string;
  featuredImage: ImageDataLike;
}
interface ICommunity {
  category: string;
  subSectionTitle: string;
  subSectionSubTitle: string;
  info: Iinfo[];
}

const Community = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "community-section" } }) {
        frontmatter {
          category
          subSectionTitle
          subSectionSubTitle
          info {
            title
            content
            url
            featuredImage {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `);

  const communitySection: ICommunity = markdownRemark?.frontmatter;

  return (
    <div className={styles.communityContainer}>
      <div>
        <CommunityHeader />
      </div>

      <div className="">
        <div>
          <GlobeSection />
        </div>

        <div className={styles.communitySection}>
          <div className="rounded-lg bg-bitcoinWildlifeBgBlack200 p-4 lg:p-6">
            <div className="flex flex-col lg:grid lg:grid-cols-2 lg:flex-row gap-6">
              {communitySection &&
                communitySection?.info.map((curr, idx) => {
                  return (
                    <div key={idx}>
                      <Card type="communityCard">
                        <div className="mb-2 rounded bg-[linear-gradient(180deg,_#121316_0%,_#24262B_100%)]">
                          <GatsbyImage
                            className="h-auto w-full max-h-full max-w-full"
                            image={
                              getImage(curr?.featuredImage) as IGatsbyImageData
                            }
                            alt={`community-img-${idx}`}
                          />
                        </div>

                        <Heading type="default" className="text-left">
                          {curr.title}
                        </Heading>

                        <div role="divider" className="mt-2" />

                        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-y-4 lg:gap-0">
                          <div className="">
                            <Paragraph type="default">{curr.content}</Paragraph>
                          </div>

                          <div className="">
                            <Link
                              type="communityLink"
                              href={curr.url || "#"}
                              showLine={false}
                            >
                              <svg
                                width="56"
                                height="56"
                                viewBox="0 0 56 56"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M29.7218 21.5774L36.4161 26.8058C37.1946 27.4138 37.1946 28.5862 36.4161 29.1942L29.7218 34.4226C28.7193 35.2056 27.25 34.4957 27.25 33.2284L27.25 28.75L19.75 28.75C19.3358 28.75 19 28.4142 19 28C19 27.5858 19.3358 27.25 19.75 27.25L27.25 27.25V22.7716C27.25 21.5043 28.7193 20.7944 29.7218 21.5774Z"
                                  fill="#16181C"
                                />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </Card>
                    </div>
                  );
                })}
            </div>

            <div className="w-full mt-6">
              <Heading type="freestyle" className="text-white text-2xl">
                {communitySection.subSectionTitle}
              </Heading>

              <div role="divider" className="mt-2" />

              <Paragraph
                type="freestyle"
                className="text-bitcoinWildlifeGrey font-jura text-xl font-semibold leading-[160%]"
              >
                {communitySection.subSectionSubTitle}
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
