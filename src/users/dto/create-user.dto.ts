import { IsEmail, IsString } from "class-validator";

export class CreateUserDto {

    readonly id: number;
    @IsEmail()
    email: string;
    @IsString()
    nickname: string;
    @IsString()
    password: string;

}