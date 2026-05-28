/** this middleware catches any errors from the async handler and sends the appropriate response */

import type { NextFunction, Request, Response } from "express";

const errorMiddleware = (err: any, _req: Request, res: Response, _next: NextFunction) => {
    console.log(err);

    // unique constraint violation
    if (err.code === '23505') {
        const field = err.meta?.target as string;
        return res.status(409).json({
            error: {
                uniqueContraintViolation: true,
                field,
                message: `a record with this ${field} already exists`
            }
        });
    };

    // other errors
    return res.status(500).json({ message: 'internal server error' });
};

export default errorMiddleware;