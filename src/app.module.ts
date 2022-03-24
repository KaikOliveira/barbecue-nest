import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:pass12345@localhost:27017/admin'),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
