import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

const reCaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_CLIENT_KEY || "";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GoogleReCaptchaProvider reCaptchaKey={reCaptchaKey}>
        <Component {...pageProps} />
      </GoogleReCaptchaProvider>
    </ThemeProvider>
  );
}

export default MyApp;
