import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = process.env.LISTEN_PORT;
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors()
  //swagger setup
  const config = new DocumentBuilder()
    .setTitle('fs-service')
    .setDescription('fs-service document')
    .setVersion('1.0')
    .addApiKey(
      {
        type: 'apiKey', // this should be apiKey
        name: 'apiKey', // this is the name of the key you expect in header
        in: 'header',
      },
      'apiKey', // this is the name to show and used in swagger
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/doc', app, document);

  //app startup
  await app.listen(port, () => {
    console.log(`Server listening on port : ${port}`);
  });
}
bootstrap();
