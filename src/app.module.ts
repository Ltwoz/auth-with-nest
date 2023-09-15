import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [MongooseModule.forRoot('mongodb://localhost/auth-with-nest'), AuthModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
