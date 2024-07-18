import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Heading from "ui/design-system/typography/heading";
import Paragraph from "ui/design-system/typography/paragraph";

const CommunityHeader = () => {
  return (
    <div>
      <div className="lg:hidden mb-12">
        <div className="flex justify-start md:ml-[calc(100%_-_80%)]">
          <StaticImage
            alt="hero img"
            src="../../../../../../images/pngs/Wolf-01.png"
          />
        </div>

        <div className="flex justify-end md:mr-[calc(100%_-_80%)]">
          <StaticImage
            alt="hero img"
            src="../../../../../../images/pngs/Cat-01.png"
          />
        </div>

        <div className="mt-16">
          <Heading type="title" className="text-left">
            We need your
            <span className="text-bitcoinWildlifeYellow"> help! </span>
          </Heading>
          <Paragraph
            type="freestyle"
            className="text-white text-center font-jura text-xl lg:text-2xl leading-[133.333%]"
          >
            The Bitcoin Wildlife Conservatorium is a community effort.
          </Paragraph>
        </div>
      </div>

      <div className="hidden lg:flex">
        <div className="max-w-[178px] w-2/12">
          <StaticImage
            alt="hero img"
            src="../../../../../../images/pngs/Wolf-01.png"
          />
        </div>

        <div className="mx-auto max-w-[calc(100%_-_356px] w-8/12">
          <Heading type="title" className="text-left">
            We need your
            <span className="text-bitcoinWildlifeYellow"> help! </span>
          </Heading>
          <Paragraph
            type="freestyle"
            className="text-white text-center font-jura text-[24px] leading-[133.333%]"
          >
            The Bitcoin Wildlife Conservatorium is a community effort.
          </Paragraph>
        </div>

        <div className="max-w-[178px] w-2/12">
          <StaticImage
            alt="hero img"
            src="../../../../../../images/pngs/Cat-01.png"
          />
        </div>
      </div>
    </div>
  );
};

export default CommunityHeader;
