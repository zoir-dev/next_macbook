import "@/styles/globals.css";
import "@/styles/app.scss";
import { appWithTranslation } from "next-i18next";
import Head from "next/head";

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;
export default appWithTranslation(MyApp);
