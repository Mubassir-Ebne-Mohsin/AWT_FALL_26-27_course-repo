import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async register(@Body() dto: CreateUserDto) {
    const user = await this.usersService.register(dto);

    return {
      message: 'User registered successfully',
      fullName: user.fullName,
      email: user.email,
      age: user.age,
      accountType: user.accountType,
    };
  }
}
