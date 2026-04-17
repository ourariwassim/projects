import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SignInDto } from './dto/signInDto';
import * as bcrypt from 'bcrypt';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}
  async SignIn(SignInDto: SignInDto) {
    const user = await this.userService.findUserByEmail(SignInDto.email);
    if (!user) return new UnauthorizedException();
    const validate = await bcrypt.compare(SignInDto.password, user.password);
    if (!validate) return new UnauthorizedException();
    const payload = {
      name: user.name,
      email: user.email,
      id: user.id,
      role: user.role,
    };
    return await this.jwtService.signAsync(payload);
  }
}
