import {
  Injectable,
  NestMiddleware,
  BadRequestException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { aesConstants } from 'src/auth/constants';
import { AES256 } from 'src/utilities/01100110';

@Injectable()
export class CheckRequestData implements NestMiddleware {
  private readonly isEncrypted = aesConstants.isEncrypted;

  async use(req: Request, res: Response, next: NextFunction) {
    const encryptedData = req.body.edocne;
    const isTrustClient = req.body.ytsurt;

    if (this.isEncrypted && encryptedData && isTrustClient) {
      try {
        req.body = JSON.parse(AES256.decryption(encryptedData));
        next();
      } catch (error) {
        console.error('Decryption error:', error.message);
        throw new BadRequestException(`Throw encryption error.`);
      }
    }
    if (!this.isEncrypted || !isTrustClient) next();
  }
}
