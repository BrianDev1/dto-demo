import { IsNotEmpty } from "class-validator";
import { Exclude } from "class-transformer";
import { Roles } from "./createUser.dto";

// Demo Purpose
export class UserEntity {
    id: string;
    firstName: string;
    lastName: string;
    password: string;
    email: string;
    role: Roles;
    createdAt: number;
    updatedAt: number;
}


export class UserDto {
    @IsNotEmpty()
    readonly firstName: string;
    @IsNotEmpty()
    readonly lastName: string;
    @IsNotEmpty()
    readonly email: string;
    @IsNotEmpty()
    readonly createdAt: number;

    // Alternative to assigning in constructor
    @Exclude()
    readonly password: string;

    constructor(payload: UserEntity) {
        this.email = payload.email;
        this.firstName = payload.firstName;
        this.lastName = payload.lastName;
        this.createdAt = payload.createdAt;
    }

}