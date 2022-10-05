import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as file_upload from 'express-fileupload'
import express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  app.use(file_upload());
 
}
bootstrap();
