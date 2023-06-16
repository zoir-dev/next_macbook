import { Close } from "@mui/icons-material";
import { Drawer } from "@mui/material";
import { useTranslation } from "next-i18next";
import gg from "../../assets/гг.png";
import Image from "next/image";

const HeaderDrawer = ({ open, setOpen, scrollToComponent }) => {
  const { t } = useTranslation();
  const handleClose = (id) => {
    setOpen(false);
    setTimeout(() => {
      scrollToComponent(id);
    });
  };

  return (
    <Drawer open={open} anchor="right">
      <div className="header_drawer">
        <div className="drawer_title">
          <Image src={gg} alt="" loading="lazy" />
          <Close onClick={() => setOpen(false)} />
        </div>
        <div className="header_drawer_links">
          <button onClick={() => handleClose("get")}>
            {t("What will you get")}
          </button>
          <button onClick={() => handleClose("work")}>
            {t("Stages of work")}
          </button>
          <button onClick={() => handleClose("portfolio")}>
            {t("Portfolio")}
          </button>
        </div>
      </div>
    </Drawer>
  );
};

export default HeaderDrawer;
