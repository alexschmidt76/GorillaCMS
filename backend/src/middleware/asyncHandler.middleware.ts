/** this middleware acts as a try catch wrapper for async functions */

import type { Request, Response, NextFunction, RequestHandler } from 'express';

type AsyncFunction = (
    req: Request,
    res: Response,
    next: NextFunction
) => Promise<any>;

const asyncHandler = (fn: AsyncFunction): RequestHandler => (
    (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    }
) as any;

export default asyncHandler;