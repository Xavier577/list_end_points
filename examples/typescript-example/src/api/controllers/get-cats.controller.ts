import { Request, Response, NextFunction as Next } from "express";

export default function getCatsController(
  _req: Request,
  res: Response,
  _next: Next
) {
  res.send("Got some cats");
}
