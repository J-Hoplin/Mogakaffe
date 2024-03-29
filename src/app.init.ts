import {
  ClassSerializerInterceptor,
  INestApplication,
  ValidationPipe,
  VersioningType,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function setINestApplicationConfig(app: INestApplication): void {
  // Get reflector
  const reflector = app.get(Reflector);

  // Enable versioning as URI
  app.enableVersioning({
    type: VersioningType.URI,
  });

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

export function setINestApplicationSwagger(app: INestApplication): void {
  const config = new DocumentBuilder()
    .setTitle('Mogakafe')
    .setDescription('Mogakafe Backend')
    .setContact(
      'J-Hoplin',
      'https://github.com/J-Hoplin',
      'hoplin.dev@gmail.com',
    )
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document, {
    explorer: true,
  });
}
