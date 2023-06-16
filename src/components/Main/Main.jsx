import { useTranslation } from "next-i18next";
import laptop from "../../assets/laptop.png";
import Image from "next/image";

const Main = ({ scrollToComponent }) => {
  const { t } = useTranslation();
  return (
    <div className="home_div container">
      <div className="home_left">
        <h2>{t("home_title")}</h2>
        <button
          className="main_button"
          onClick={() => scrollToComponent("contact")}
        >
          {t("home_button")}
        </button>
      </div>
      <Image src={laptop} alt="" loading="lazy" />
    </div>
  );
};

export default Main;
