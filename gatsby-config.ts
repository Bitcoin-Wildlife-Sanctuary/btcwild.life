import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
	siteMetadata: {
		title: `bitcoin-wildlife-website`,
		siteUrl: `https://btcwildlife.netlify.app/`,
		description: `We're a passionate group of bitcoiners working on a revolutionary project: a STARK verifier for Bitcoin, built on the assumption of OP_CAT integration. This will unlock incredible potential for the future of Bitcoin`,
		author: `Xelmar`,
		imageUrl: '',
		imageType: 'image/png'
	},
	// More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
	// If you use VSCode you can also use the GraphQL plugin
	// Learn more at: https://gatsby.dev/graphql-typegen
	graphqlTypegen: true,
	plugins: [
		"gatsby-plugin-postcss",
		"gatsby-plugin-image",
		"gatsby-plugin-mdx",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				"icon": "src/images/svgs/favicon.svg"
			}
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/images",
			},
			__key: "images",
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "pages",
				path: "./src/pages",
			},
			__key: "pages",
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `data`,
				path: `${__dirname}/src/content`,
				fastHash: true,
			},
		},
		"gatsby-transformer-remark",
		{
			resolve: `gatsby-plugin-alias-imports`,
			options: {
				alias: {
					"@src": "src",
					"@ui": "src/ui",
				},
				extensions: []
			}
		},
		{
			resolve: `gatsby-plugin-tsconfig-paths`,
			options: {
				configFile: `${__dirname}/tsconfig.json`,
				silent: true,
			},
		},
		"gatsby-plugin-react-svg",
		"gatsby-plugin-sass",
		"gatsby-plugin-dts-css-modules",
	],
};

export default config;
