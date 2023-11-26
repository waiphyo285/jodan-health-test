import helmet from 'helmet';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Security middlewares
  app.enableCors();
  app.use(helmet());

  // Validation
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe({ disableErrorMessages: false }));
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  // OpenAPI Specification
  const config = new DocumentBuilder()
    .setTitle('Full Stack Template')
    .setDescription('API Documentation for Nest.js x Next.js application')
    .setVersion('2.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter token',
        in: 'header',
      },
      'JWT-auth', // This name here is important for matching up with @ApiBearerAuth() in your controller!
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(process.env.API_PORT || 5000);
}

bootstrap();
