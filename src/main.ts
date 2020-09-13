import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

var port = process.env.PORT || 8080;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  await app.listen(port, 'localhost');
  console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap().then();
