import { Body, Controller, Post } from '@nestjs/common';
import { loginDto } from 'src/common/dtos/loginDto';
import { userService } from './user.service';
import { createUserDto } from 'src/common/dtos/createUserDto';

@Controller('user')
export class userController {
  constructor(private readonly userService: userService) {}

  @Post('login')
  login(@Body() loginDto: loginDto) {
    return this.userService.login(loginDto);
  }

  @Post('createUser')
  createUser(@Body() createUserDto: createUserDto) {
    return this.userService.createUser(createUserDto);
  }
}
