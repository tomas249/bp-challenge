import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import qs from "query-string";

import { handleRequests } from "@helpers/requestMethodHandler";

const SCORE_THRESHOLD = 0.5;
const VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";

type Data = {
  scorePassed?: boolean;
  success?: boolean;
  message?: string;
};

async function POST(req: NextApiRequest, res: NextApiResponse<Data>) {
  const token = req.body.token;
  const secret = process.env.RECAPTCHA_SECRET_KEY;

  const response = await axios.post(
    VERIFY_URL,
    qs.stringify({ secret, response: token })
  );

  const score = response.data.score;
  const scorePassed = score >= SCORE_THRESHOLD;

  res.status(200).json({ success: true, scorePassed });
}

export default handleRequests({ POST });
