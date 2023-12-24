import { IsEmail, IsString, IsOptional } from "class-validator";

export class UpdateUserDto {

    readonly id: number;

    @IsEmail()
    @IsOptional()
    email: string;

    @IsString()
    @IsOptional()
    nickname: string;

    @IsString()
    @IsOptional()
    password: string;

}