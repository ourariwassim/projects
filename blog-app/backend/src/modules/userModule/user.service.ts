import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createUserDto } from 'src/common/dtos/createUserDto';
import { loginDto } from 'src/common/dtos/loginDto';
import { user } from 'src/common/models/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class userService {
  constructor(
    @InjectRepository(user)
    private readonly userRep: Repository<user>,
  ) {}
  async login(loginDto: loginDto) {
    const result = await this.userRep.findOneBy({
      email: loginDto.email,
      password: loginDto.password,
    });
    if (!result) throw new UnauthorizedException('no account');
    return await result;
  }

  async createUser(createUserDto: createUserDto) {
    const result = await this.userRep.findOneBy({ email: createUserDto.email });
    if (result) throw new UnauthorizedException('invalid credentials');
    const user = this.userRep.create(createUserDto);
    return this.userRep.save(user);
  }
  getUserById(id: string) {
    return this.userRep.findOneBy({ id });
  }
}
