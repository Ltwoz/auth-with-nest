import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.model';
import { CreateUserDTO } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(
        @InjectModel('user') private readonly userModel: Model<UserDocument>,
    ) {}

    async createUser(createUserDTO: CreateUserDTO): Promise<User> {
        const { username, password } = createUserDTO;

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await this.userModel.create({
            username,
            password: hashedPassword,
        });

        return user;
    }

    async getUser(query: object): Promise<User> {
        const user = await this.userModel.findOne(query);
        return user;
    }
}
