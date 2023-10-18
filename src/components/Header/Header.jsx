import { Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { Menu as Menuu } from "@mui/icons-material";
import HeaderDrawer from "./HeaderDrawer";
import gg from "../../assets/гг.png";
import arrow from "../../assets/arrow.png";
import { data } from ".";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = ({ scrollToComponent }) => {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  const [menu, setMenu] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const router = useRouter();
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setMenu(true);
  };
  const handleClose = () => {
    setMenu(false);
    setAnchorEl(null);
  };
  return (
    <div className="header_div">
      <Image src={gg} className="logo" alt="" loading="lazy" />
      <div className="header_links">
        <button onClick={() => scrollToComponent("get")}>
          {t("What will you get")}
        </button>
        <button onClick={() => scrollToComponent("work")}>
          {t("Stages of work")}
        </button>
        <button onClick={() => scrollToComponent("portfolio")}>
          {t("Portfolio")}
        </button>
      </div>
      <div className="header_translation">
        <div onClick={handleOpen}>
          <Image
            className="flag"
            src={data.filter((d) => d.name === router.locale)[0].img}
            alt="flag"
          />
          <Image
            className={`arrow ${menu && "open_menu "}`}
            src={arrow}
            alt=""
            loading="lazy"
          />
        </div>
        <Menu anchorEl={anchorEl} keepMounted open={menu} onClose={handleClose}>
          {data.map((d) => (
            <Link href={router.pathname} locale={d.name} key={d.name}>
              <MenuItem onClick={() => setMenu(false)}>
                <Image
                  className="flag menuFlag"
                  src={d.img}
                  alt=""
                  loading="lazy"
                />
              </MenuItem>
            </Link>
          ))}
        </Menu>
        <Menuu className="header_menu_icon" onClick={() => setDrawer(true)} />
      </div>
      <HeaderDrawer
        open={drawer}
        setOpen={setDrawer}
        scrollToComponent={scrollToComponent}
      />
    </div>
  );
};

export default Header;
