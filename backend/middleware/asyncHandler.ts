import { Request, Response, NextFunction } from 'express';

type AsyncFunction<T extends Request> = (
  req: T,
  res: Response,
  next: NextFunction
) => Promise<any>;

const asyncHandler =
  <T extends Request>(fn: AsyncFunction<T>) =>
  (req: T, res: Response, next: NextFunction): Promise<void> =>
    Promise.resolve(fn(req, res, next)).catch(next);

export default asyncHandler;

// const asyncHandler = (fn) => (req, res, next) =>
//   Promise.resolve(fn(req, res, next)).catch(next);

// export default asyncHandler;
