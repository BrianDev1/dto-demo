import { Injectable } from '@nestjs/common';
import { CreateUserDto, Roles } from './dto/createUser.dto';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  getIntroText(): string {
    return 'Hey, well done! You passed our validation!';
  }

  createUserWithDto(inputUser: CreateUserDto): string {
    return `Hey, well done! You passed our validation! Your name: ${inputUser.fullName}`;
  }

  getUser(): UserDto {

    return new UserDto({
      id: '5238293923',
      firstName: 'John',
      lastName: 'Doe',
      password: 'someHashedPassword',
      email: 'john@test.com',
      role: Roles.guest,
      createdAt: 628911891,
      updatedAt: 728989192,
    });
  }
}
