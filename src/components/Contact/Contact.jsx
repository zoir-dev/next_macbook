import { useTranslation } from "next-i18next";
import { useState } from "react";
import DirectionSnackbar from "../Alert/Alert";
import { CircularProgress } from "@mui/material";
import ReactInputMask from "react-input-mask";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("(+998) (__) ___-__-__");
  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [validName, setValidName] = useState(false);
  const [validTel, setValidTel] = useState(false);
  const [error, setError] = useState(false);
  const { t } = useTranslation();

  const extractPhoneNumber = (string) => {
    const pattern = /\d/g;
    const numbers = string.match(pattern);
    return numbers ? numbers.join("") : "";
  };
  const handleKeyDown = (e) => {
    if (e.key === "Backspace" && tel === "(+998) (__) ___-__-__") {
      e.preventDefault();
    }
  };
  const sendEmail = async (e) => {
    try {
      await axios.get(
        `https://api.telegram.org/bot6129287522:AAHm4TVx9XtEzCTJ4lku9WQW8AbfMe3bYTc/sendMessage`,
        {
          params: {
            chat_id: "448509829",
            text: `
          Yangi Mijoz:
          Ismi: ${name}
          Tel: +${extractPhoneNumber(tel)}
        `,
          },
        }
      );
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };
  const handleSend = async (e) => {
    e.preventDefault();
    if (name && extractPhoneNumber(tel).length === 12) {
      setLoading(true);
      await sendEmail(e)
        .then(() => {
          setError(false);
          setName("");
          setTel("(+998) (__) ___-__-__");
        })
        .catch((error) => {
          console.error(error);
          setError(true);
        });
      setAlert(true);
      setLoading(false);
      setValidName(false);
      setValidTel(false);
    } else {
      setValidName(true);
      setValidTel(true);
    }
  };
  return (
    <div className="contact_div container" id="contact">
      <h1>{t("contacth1")}</h1>
      <h2>{t("contacth2")}</h2>
      <form onSubmit={handleSend} className="form_div">
        <div className="inputs">
          <div className="input">
            <label htmlFor="input1">{t("label1")}</label>
            <input
              type="text"
              id="input1"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={loading}
              autoComplete="off"
            />
            {!name && validName && (
              <p className="validation">{t("nameValid")}</p>
            )}
          </div>
          <div className="input">
            <label htmlFor="input2">{t("label2")}</label>
            <ReactInputMask
              id="input2"
              mask="(+999) (99) 999-99-99"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
              onKeyDown={(e) => handleKeyDown(e)}
              maskplaceholder="_"
              alwaysShowMask
              type="tel"
              disabled={loading}
            />
            {extractPhoneNumber(tel).length !== 12 && validTel && (
              <p className="validation">{t("phoneValid")}</p>
            )}
          </div>
        </div>
        <button
          className={`main_button ${loading && "loading_button"}`}
          onClick={handleSend}
          type="submit"
        >
          {!loading ? t("home_button") : t("submitting")}
          {loading && (
            <CircularProgress color="inherit" className="loading_icon" />
          )}
        </button>
      </form>
      <DirectionSnackbar
        open={alert}
        setOpen={setAlert}
        message={!error ? t("application") : t("reject")}
        severity={error}
      />
    </div>
  );
};

export default Contact;
