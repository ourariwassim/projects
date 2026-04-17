import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUserDto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRep: Repository<User>,
  ) {}

  async createUser(userDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(userDto.password, 10);
    const user = this.userRep.create({ ...userDto, password: hashedPassword });
    return this.userRep.save(user);
  }
  findUserById(id: string) {
    return this.userRep.findOneBy({ id });
  }
  findUserByEmail(email: string) {
    return this.userRep.findOneBy({ email });
  }
}
