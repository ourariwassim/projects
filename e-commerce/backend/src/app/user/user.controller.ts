import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/createUserDto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('createUser')
  createUser(@Body() userDto: CreateUserDto) {
    console.log(userDto);
    return this.userService.createUser(userDto);
  }
}
