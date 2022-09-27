import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { verifyReCaptcha as verifyReCaptchaAPI } from "@api/ReCaptcha";

export function useReCaptcha() {
  const { executeRecaptcha } = useGoogleReCaptcha();

  async function verifyReCaptcha() {
    if (!executeRecaptcha) {
      console.log("Execute recaptcha not yet available");
      return;
    }

    const token = await executeRecaptcha("yourAction");
    const res = await verifyReCaptchaAPI(token);

    if (res.data.success) {
      return res.data.scorePassed;
    }

    console.error("Error verifying reCaptcha", res.data.message);
    return;
  }

  return { verifyReCaptcha };
}
