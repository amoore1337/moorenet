import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.png" sizes="16x16" />
        <link rel="icon" href="/favicon_32.png" sizes="32x32" />
      </Head>
      <body>
        <Script id="darkMode" strategy="beforeInteractive">
          {`
          if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
         `}
        </Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
