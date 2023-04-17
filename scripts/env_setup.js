const fs = require('fs');
const targetPath = 'env.ts';
const envConfigFile = `export const FIREBASE_CONFIG: any = {
  apiKey: '${process.env.API_KEY}',
  authDomain: '${process.env.AUTH_DOMAIN}',
  projectId: '${process.env.PROJECT_ID}',
  storageBucket: '${process.env.STORAGE_BUCKET}',
  messagingSenderId: '${process.env.MESSAGING_SENDER_ID}',
  appId: '${process.env.APP_ID}',
  measurementId: '${process.env.MEASUREMENT_ID}',
  };
`;

try {
  fs.writeFileSync(targetPath, envConfigFile);
  console.log(`Angular environment file generated correctly at ${targetPath}`);
} catch (err) {
  console.error('Could not write to file', err);
  process.exit(1);
}
