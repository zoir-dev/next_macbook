"use client";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Get from "../components/Get/Get";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Portfolio from "../components/Portfolio/Portfolio";
import Work from "../components/Work/Work";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
export default function Home() {
  const scrollToComponent = (id) => {
    const targetComponent = document.getElementById(id);
    targetComponent.scrollIntoView({ behavior: "smooth" });
  };
  const metadata = {
    title: "Uni Agency",
    description: "This is the Uni Agency website",
    image: "/public/гг.png",
  };
  return (
    <div>
      <Head>
        <title>{metadata.title}</title>
        <link rel="icon" href={metadata.image} type="image/png" sizes="16x16" />
      </Head>
      <Header scrollToComponent={scrollToComponent} />
      <div className="main_div">
        <Main scrollToComponent={scrollToComponent} />
        <Get scrollToComponent={scrollToComponent} />
        <Work />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
