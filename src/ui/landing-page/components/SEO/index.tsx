import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

type Meta =
  | {
      name: string;
      content: any;
    }
  | {
      property: string;
      content: any;
    };

interface Props {
  description?: string;
  lang?: string;
  meta?: Meta[];
  title: string;
}

interface SiteMetadata {
  site: {
    siteMetadata: {
      title: string;
      siteUrl: string;
      description: string;
      author: string;
      imageUrl: string;
      imageType: string;
    };
  };
}

const SEO: React.FC<Props> = ({
  description,
  lang = "en",
  meta = [] as Meta[],
  title,
}) => {
  const { site } = useStaticQuery<SiteMetadata>(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            imageUrl
            imageType
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:url`,
          content: site.siteMetadata.siteUrl,
        },
        {
          property: `og:image`,
          content: site.siteMetadata.imageUrl,
        },
        {
          property: `og:image:secure_url`,
          content: site.siteMetadata.imageUrl,
        },
        {
          property: `og:image:type`,
          content: site.siteMetadata.imageType,
        },
        {
          property: `og:image:width`,
          content: `400`,
        },
        {
          property: `og:image:height`,
          content: `300`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta!)}
    />
  );
};

export default SEO;
