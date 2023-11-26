import { ApiTags } from '@nestjs/swagger';
import { Controller, Post } from '@nestjs/common';
import { FirebaseAdminService } from './firebase-admin.service';

@Controller('firebase-admins')
@ApiTags('Firebase Admin')
export class FirebaseAdminController {
  constructor(private readonly firebaseAdminService: FirebaseAdminService) {}

  @Post('/send-device-token')
  async pushNotificationToToken() {
    const deviceToken =
      'caZFExT9TxOJ1JBzrKVzEU:APA91bG4VqjobkaIORf26OntrbU4tyBfx4hB8iwnVusVNU84pUVFBc4XMMYozEb-dCROjkZC8a_4ptJTu_cYW7uPo0Xn3TXyCpfZTwEWfCl6n1yc3csq8pQ5w9NH8-9k10_HvycEzOC-';
    const title = 'Hello from Nest.js';
    const body = 'This is a push notification example!';

    const result = await this.firebaseAdminService.pushNotificationByTokens(
      deviceToken,
      title,
      body,
    );

    return result;
  }

  @Post('send-with-topics')
  async pushNotificationToTopic() {
    const topic = 'your_topic_name';
    const title = 'Hello from Nest.js';
    const body = 'This is a push notification to a topic!';

    const result = await this.firebaseAdminService.pushNotificationByTopic(
      topic,
      title,
      body,
    );

    return result;
  }
}
