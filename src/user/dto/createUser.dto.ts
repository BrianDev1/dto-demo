import { IsNotEmpty, IsEmail, MinLength, IsString, IsEnum } from 'class-validator';
import { Expose } from 'class-transformer';

export enum Roles {
    guest = 'Guest',
    user = 'User',
    admin = 'Admin'
}


export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    readonly firstName: string;
    @IsNotEmpty()
    @IsString()
    readonly lastName: string;
    @IsNotEmpty()
    @IsString()
    @IsEmail(undefined, { message: 'Email you provided is invalid!' })
    readonly email: string;
    @IsNotEmpty()
    @MinLength(8, { message: 'Password should be atleat 8 characters.' })
    private readonly password: string;
    @IsNotEmpty()
    @IsEnum(Roles, { message: 'Invalid role provided!' })
    readonly role: Roles;

    @Expose()
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    @Expose()
    get hashedPwd(): string {
        return `someHashPwd${this.password}` // Perform some encryption;
    }

}