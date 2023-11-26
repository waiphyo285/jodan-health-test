import * as admin from 'firebase-admin';

export const firebaseAdminProvider = {
  provide: 'FIREBASE_ADMIN',
  useFactory: () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const serviceAccount = require('../src/config/firebase-admin-sdk.json');
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      // Add any other configuration options here
    });
    return admin;
  },
};
