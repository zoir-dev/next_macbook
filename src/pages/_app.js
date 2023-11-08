import "@/styles/globals.css";
import "@/styles/app.scss";
import { appWithTranslation } from "next-i18next";
import Script from "next/script";
import Head from "next/head";

const MyApp = ({ Component, pageProps }) => {
  <>
    <Head>
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

            ym(86849414, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true,
                  webvisor:true,
                  ecommerce:"dataLayer"
                });
                `,
        }}
      />
      <noscript>
        <div>
          <img
            src="https://mc.yandex.ru/watch/86849414"
            style="position:absolute; left:-9999px;"
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
          style="display:none"
          src="https://www.facebook.com/tr?id=727650709182274&ev=PageView&noscript=1"
        />
      </noscript>
    </Head>
    <Component {...pageProps} />;
  </>;
};

export default appWithTranslation(MyApp);
