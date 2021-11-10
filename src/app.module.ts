import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

//아래의 @는 데코레이터라 하며 이는 클래스에 함수 기능을 추가할 수 있다.
@Module({
  //다양한 module이 있을 수 있기 때문에 controler와 provider는 module에 포함시켜 관리하는게 좋다
  imports: [MoviesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
