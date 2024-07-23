import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Hero from "ui/landing-page/components/hero";
import AboutUs from "ui/landing-page/components/about-us";
import HowItWorks from "ui/landing-page/components/how-it-works";
import Community from "ui/landing-page/components/community";
import Footer from "ui/landing-page/components/footer";
import Navbar from "ui/landing-page/components/navbar";
import SEO from "ui/landing-page/components/SEO";

const IndexPage: React.FC<PageProps> = ({ data }) => {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <AboutUs />
      <HowItWorks />
      <Community />
      <Footer />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <SEO title="Bitcoin Wildlife" />;
