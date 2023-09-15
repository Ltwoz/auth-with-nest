import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/user/user.model';
import { UserService } from 'src/user/user.service';
import { LocalStrategy } from './local/local.strategy';

@Module({
    imports: [
        UserModule,
        PassportModule,
        JwtModule.register({
            secret: 'secretKey',
            signOptions: { expiresIn: '7d' },
        }),
        MongooseModule.forFeature([{ name: 'user', schema: UserSchema }]),
    ],
    providers: [AuthService, UserService, LocalStrategy],
    controllers: [AuthController],
})
export class AuthModule {}
