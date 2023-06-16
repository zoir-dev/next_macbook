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
        <a href="tel:+998930045554">+998930045554</a>
        <a href="tel:+998994935584">+998994935584</a>
      </div>
      <div className="socials">
        <a href="https://t.me/uniagency">
          <Image src={telegram} alt="" className="footer_icon" loading="lazy" />
        </a>
        <a href="https://www.instagram.com/uniagency.uz/">
          <Instagram />
        </a>
        <a href="https://www.youtube.com/channel/UCpKe3MvpUghkvKn44Ke1suw">
          <Image src={utube} className="footer_icon" alt="" loading="lazy" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
