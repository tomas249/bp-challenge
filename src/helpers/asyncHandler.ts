import type { NextApiRequest, NextApiResponse } from "next";

type ExpressFN = (req: NextApiRequest, res: NextApiResponse) => void;

export function asyncHandler(fn: ExpressFN) {
  return function (req: NextApiRequest, res: NextApiResponse) {
    try {
      fn(req, res);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Internal server error";
      res.status(500).json({ message });
    }
  };
}
