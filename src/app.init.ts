import {
  ClassSerializerInterceptor,
  INestApplication,
  ValidationPipe,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

export async function setINestApplication(
  app: INestApplication,
): Promise<void> {
  // Get reflector
  const reflector = app.get(Reflector);

  // Set class-validator option
  app.useGlobalPipes(
    new ValidationPipe({
      skipNullProperties: true,
      whitelist: true,
    }),
  );

  // Set class-transformer global serializer interceptor
  app.useGlobalInterceptors(new ClassSerializerInterceptor(reflector));
}
