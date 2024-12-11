import { Request } from 'express';
import { ObjectId } from 'mongoose';

export interface AuthRequest extends Request {
  user: {
    _id: ObjectId;
    name: string;
    isAdmin: boolean;
    email: string;
  };
}
