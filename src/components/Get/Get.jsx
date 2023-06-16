import { useTranslation } from "next-i18next";
import one from "../../assets/1.png";
import two from "../../assets/2.png";
import three from "../../assets/3.png";
import Image from "next/image";
const Get = ({ scrollToComponent }) => {
  const { t } = useTranslation();
  return (
    <div id="get" className="get_div container">
      <Image className="absolute1" src={one} alt="" loading="lazy" />
      <Image className="absolute2" src={two} alt="" loading="lazy" />
      <h1>{t("What will you get")} ?</h1>
      <div className="gets">
        <div className="get">
          <div className="infinite_div"></div>
          <p>{t("1")}</p>
        </div>
        <div className="get">
          <div className="infinite_div"></div>
          <p>{t("2")}</p>
        </div>
        <div className="get">
          <div className="infinite_div"></div>
          <p>{t("3")}</p>
        </div>
        <div className="get">
          <div className="infinite_div"></div>
          <p>{t("4")}</p>
        </div>
        <div className="get">
          <div className="infinite_div"></div>
          <p>{t("5")}</p>
        </div>
      </div>
      <button
        className="main_button"
        onClick={() => scrollToComponent("contact")}
      >
        {t("home_button")}
      </button>
      <Image className="absolute3" src={three} alt="" loading="lazy" />
    </div>
  );
};

export default Get;
