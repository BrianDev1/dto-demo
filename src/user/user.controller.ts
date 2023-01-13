import { Controller, Get, ClassSerializerInterceptor, UseInterceptors, Post, Param, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto, UserEntity } from './dto/user.dto';
import { CreateUserDto, Roles } from './dto/createUser.dto';


// Below is an interceptor used to serialise data before returning it
@UseInterceptors(ClassSerializerInterceptor)
@Controller()
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get('/users/intros')
  getIntro(): string {
    return this.userService.getIntroText();
  }

  @Get('/users/:uid')
  getUser(@Param('uid') uid: string): UserDto {
    return this.userService.getUser();
  }

  @Get('/users/no-serialise')
  getUserNoSerial(): UserEntity {
    const user = {
      id: '5238293923',
      firstName: 'John',
      lastName: 'Doe',
      password: 'someHashedPassword',
      email: 'john@test.com',
      role: Roles.guest,
      createdAt: 628911891,
      updatedAt: 728989192,
    };
    return user;
  }

  @Post('/users')
  createUser(@Body() body: CreateUserDto): string {
    return this.userService.createUserWithDto(body);
  }

  @Post('/users/no-validation')
  createUserNoValidation(@Body() body: Partial<UserEntity>): any {
    return body;
  }
}
