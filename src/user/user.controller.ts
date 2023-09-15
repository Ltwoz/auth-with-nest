import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/create-user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('/signup')
    async createUser(@Body() createUserDTO: CreateUserDTO) {
        return await this.userService.createUser(createUserDTO);
    }
}
