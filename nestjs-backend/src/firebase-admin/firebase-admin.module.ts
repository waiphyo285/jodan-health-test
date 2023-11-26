import { Module } from '@nestjs/common';
import { FirebaseAdminService } from './firebase-admin.service';
import { FirebaseAdminController } from './firebase-admin.controller';
import { firebaseAdminProvider } from 'src/firebase-admin.provider';

@Module({
  controllers: [FirebaseAdminController],
  providers: [firebaseAdminProvider, FirebaseAdminService],
  exports: [FirebaseAdminService],
})
export class FirebaseAdminModule {}
