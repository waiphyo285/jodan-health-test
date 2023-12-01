import { Module } from '@nestjs/common';
import { FirebaseFCMService } from './firebase-fcm.service';
import { FirebaseFCMController } from './firebase-fcm.controller';
import { firebaseFCMProvider } from 'src/firebase-fcm.provider';

@Module({
  controllers: [FirebaseFCMController],
  providers: [firebaseFCMProvider, FirebaseFCMService],
  exports: [FirebaseFCMService],
})
export class FirebaseAdminModule {}
