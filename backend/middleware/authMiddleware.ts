import jwt from 'jsonwebtoken';
import asyncHandler from './asyncHandler';
import User from '../models/userModel';
import { AuthRequest } from '../controllers/typesController';
import { Request, Response, NextFunction } from 'express';

// User must be authenticated
const protect = asyncHandler(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    // Read JWT from the 'jwt' cookie
    let token = req.cookies.jwt;
    const authReq = req as AuthRequest;

    if (token) {
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
          userId: string;
        };

        const user = await User.findById(decoded.userId).select('-password');
        if (!user) {
          res.status(401);
          throw new Error('Not authorized, user not found');
        }
        authReq.user = {
          _id: user._id,
          name: user.name,
          isAdmin: user.isAdmin,
          email: user.email,
        };

        next();
      } catch (error) {
        console.error(error);
        res.status(401);
        throw new Error('Not authorized, token failed');
      }
    } else {
      res.status(401);
      throw new Error('Not authorized, no token');
    }
  }
);

// User must be an admin
const admin = (req: Request, res: Response, next: NextFunction): void => {
  const authReq = req as AuthRequest;
  if (authReq.user && authReq.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error('Not authorized as an admin');
  }
};

export { protect, admin };
