import { post } from "./helpers";

export const verifyReCaptcha = (token: string) =>
  post("/api/verifyReCaptcha", token);
