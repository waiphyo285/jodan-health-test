import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';

@Injectable()
export class CheckIdIsEmpty implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    let data = req.body;
    if ('id' in data) {
      if (data['id'] == '') {
        delete data['id'];
      }
    }
    next();
  }
}
