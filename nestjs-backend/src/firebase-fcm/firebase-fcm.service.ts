import { Injectable, Inject } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class FirebaseFCMService {
  constructor(
    @Inject('FIREBASE_FCM') private readonly firebaseFCM: admin.app.App,
  ) {}

  async pushNotificationByTokens(tokens: any, title: string, body: string) {
    const notification = {
      title,
      body,
    };

    const message: admin.messaging.MulticastMessage = {
      notification,
      tokens,
    };

    try {
      const response = await this.firebaseFCM
        .messaging()
        .sendMulticast(message);

      console.info('Success notification sent: ', response);
      return response;
    } catch (error) {
      console.error('Error sending notification: ', error);
      return error;
    }
  }

  async pushNotificationByTopic(topic: string, title: string, body: string) {
    const notification = {
      title,
      body,
    };

    const message = {
      notification,
      topic,
    };

    try {
      const response = await this.firebaseFCM.messaging().send(message);

      console.info('Success notification sent: ', response);
      return response;
    } catch (error) {
      console.error('Error sending notification: ', error);
      return error;
    }
  }
}
