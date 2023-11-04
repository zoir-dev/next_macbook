import { Instagram } from "@mui/icons-material";
import { useTranslation } from "next-i18next";
import telegram from "../../assets/telegram.png";
import utube from "../../assets/utube.png";
import gg from "../../assets/гг.png";
import Image from "next/image";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="footer_div">
      <Image src={gg} alt="" loading="lazy" />
      <div className="contacts">
        <p>{t("contact")}</p>
        <a href="tel:+998903186111">+998903186111</a>
      </div>
      <div className="socials">
        <a href="">
          <Image src={telegram} alt="" className="footer_icon" loading="lazy" />
        </a>
        <a href="https://www.instagram.com/uniagency.uz/">
          <Instagram />
        </a>
        <a href="">
          <Image src={utube} className="footer_icon" alt="" loading="lazy" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
