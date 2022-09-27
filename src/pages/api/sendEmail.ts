import type { NextApiRequest, NextApiResponse } from "next";
import { handleRequests } from "@helpers/requestMethodHandler";

function GET(_req: NextApiRequest, res: NextApiResponse) {
  // throw new Error("This is a test error");
  res.status(200).json({ success: true, message: "TEST: GET request" });
}

function POST(req: NextApiRequest, res: NextApiResponse) {
  const email = req.body.email;
  console.log(email);

  res.status(200).json({ success: true, message: "Email sent correctly" });
}

export default handleRequests({ GET, POST });
