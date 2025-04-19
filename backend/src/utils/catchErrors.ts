import { NextFunction, Request, Response } from "express";

type AsyncControoler = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<any>;

const catchErrors =
  (controller: AsyncControoler): AsyncControoler =>
  async (req, res, next) => {
    try {
      await controller(req, res, next);
    } catch (error) {
      next(error);
    }
  };

  export default catchErrors;