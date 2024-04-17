import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as firebaseAdmin from 'firebase-admin';
import { firebaseParams } from './auth/firebase';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3001);
  const firebaseApp = firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(firebaseParams),
  });
}
bootstrap();
