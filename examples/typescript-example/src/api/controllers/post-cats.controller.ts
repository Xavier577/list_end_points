import { Request, Response, NextFunction as Next } from "express";

export default function postCatsController(
  _req: Request,
  res: Response,
  _next: Next
) {
  res.send("posted some cats");
}
