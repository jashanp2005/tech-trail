import jwt from 'jsonwebtoken';
import { errorHandler } from './error.js';
import dotenv from 'dotenv';

dotenv.config();

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if(!token){
        console.log('Did not get the token')
        return next(errorHandler(401, 'Unauthorized'));
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if(err){
            console.log(err.message);
            return next(errorHandler(401, 'Unauthorized'));
        }
        req.user = user;
        next();
    });
};