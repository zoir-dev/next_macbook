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
        <script
          type="text/javascript"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
           (function(m,e,t,r,i,k,a){m[i]=m[i]function(){(m[i].a=m[i].a[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(95384978, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true,
                  webvisor:true
            });
                `,
          }}
        />
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/95384978"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>

        <script
          type="text/javascript"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '727650709182274');
            fbq('track', 'PageView');
            `,
          }}
        />

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=727650709182274&ev=PageView&noscript=1"
          />
        </noscript>
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
