import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';

@Injectable()
export class CheckIsEmptyId implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    const data = req.body;

    if ('id' in data && data['id'] == '') {
      delete data['id'];
    }

    next();
  }
}
