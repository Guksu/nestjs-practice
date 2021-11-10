import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //유효성 검사용 ( npm i class-validator class-transformer 가 필요하다)
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      //parm은 기본적으로 id이므로 controller의 id는 string타입이지만 transform을 사용하면 자동으로 entity에 입력된 타입으로 변화시킨다.
    }),
  );
  await app.listen(3000);
}
bootstrap();
