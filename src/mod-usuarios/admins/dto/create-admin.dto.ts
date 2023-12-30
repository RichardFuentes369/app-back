// import { Transform } from "class-transformer";
import { IsString, IsBoolean, IsNumber } from "class-validator";

export class CreateAdminDto {

    @IsString()
    // @Transform(({value}) => value.trim())
    readonly firstName;

    @IsString()
    // @Transform(({value}) => value.trim())
    readonly lastName;

    @IsBoolean()
    // @Transform(({value}) => value.trim())
    readonly isActive;
    
}
