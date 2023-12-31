import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsString, IsBoolean, IsNumber, IsEmail } from "class-validator";

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsString()
    // @Transform(({value}) => value.trim())
    readonly firstName;

    @IsString()
    // @Transform(({value}) => value.trim())
    readonly lastName;

    @IsEmail()
    // @Transform(({value}) => value.trim())
    readonly email;

    @IsBoolean()
    // @Transform(({value}) => value.trim())
    readonly isActive;
}
