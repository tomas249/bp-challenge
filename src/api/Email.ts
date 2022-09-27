import { post } from "./helpers";

export const sendEmail = (payload: {}) => post("/api/sendEmail", payload);
