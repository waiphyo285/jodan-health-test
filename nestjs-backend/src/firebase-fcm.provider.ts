import * as admin from 'firebase-admin';

export const firebaseFCMProvider = {
  provide: 'FIREBASE_FCM',
  useFactory: () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const serviceAccount = require('../src/config/firebase-fcm-sdk.json');
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      // Add any other configuration options here
    });
    return admin;
  },
};
