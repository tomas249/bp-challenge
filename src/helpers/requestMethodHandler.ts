import type { NextApiRequest, NextApiResponse } from "next";
import { asyncHandler } from "./asyncHandler";

const REQUEST_METHODS = ["POST", "GET", "PUT", "DELETE"];

type ExpressFN = (req: NextApiRequest, res: NextApiResponse) => void;
type Requests = {
  [key in typeof REQUEST_METHODS[number]]: ExpressFN;
};

export function handleRequests(requests: Requests) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const method = req.method || "";

    if (!requests[method]) {
      NotAllowed(req, res);
      return;
    }

    asyncHandler(requests[method])(req, res);
  };
}

function NotAllowed(_: NextApiRequest, res: NextApiResponse) {
  res
    .status(405)
    .json({ success: false, message: "Method not allowed on this endpoint" });
}
