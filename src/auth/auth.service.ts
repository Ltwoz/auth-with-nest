import { Injectable, NotAcceptableException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private jwtService: JwtService,
    ) {}

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.userService.getUser({ username });

        if (!user) {
            throw new NotAcceptableException('could not find the user');
        }

        if (user && (await bcrypt.compare(password, user.password))) {
            const { ...result } = user;
            return result;
        }
    }

    async signIn(user: any) {
        const payload = { username: user.username, sub: user._id };
        return {
            accessToken: this.jwtService.sign(payload),
        };
    }
}
