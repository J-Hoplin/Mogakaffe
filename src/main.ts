import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  setINestApplicationConfig,
  setINestApplicationSwagger,
} from './app.init';
import { GlobalLogger } from './logger/logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });
  const logger = await app.resolve(GlobalLogger);
  app.useLogger(logger);

  app.enableCors({
    origin: '*',
  });

  setINestApplicationConfig(app);
  setINestApplicationSwagger(app);

  await app.listen(3000);
}
bootstrap();
