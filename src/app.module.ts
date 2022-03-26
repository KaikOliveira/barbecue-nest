import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongo:docker@localhost:27017/admin'),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
