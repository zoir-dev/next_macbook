import { useTranslation } from "next-i18next";
import seven from "../../assets/7.png";
import first from "../../assets/11.png";
import second from "../../assets/12.png";
import third from "../../assets/13.png";
import fourth from "../../assets/14.png";
import fivth from "../../assets/15.png";
import sixth from "../../assets/16.png";
import Image from "next/image";

const Portfolio = () => {
  const { t } = useTranslation();
  return (
    <div id="portfolio" className="portfolio_div container">
      <h1>{t("Portfolio")}</h1>
      <div className="logos">
        <Image src={first} alt="logo" loading="lazy" />
        <Image src={second} alt="logo" loading="lazy" />
        <Image src={third} alt="logo" loading="lazy" />
        <Image src={fourth} alt="logo" loading="lazy" />
        <Image src={fivth} alt="logo" loading="lazy" />
        <Image src={sixth} alt="logo" loading="lazy" />
      </div>
      <Image className="absolute7" src={seven} alt="" />
    </div>
  );
};

export default Portfolio;
