import { IsNumber, IsString } from "class-validator";
export class CreateAuthDto {

    @IsString()
    // @Transform(({value}) => value.trim())
    readonly username;

    @IsString()
    // @Transform(({value}) => value.trim())
    readonly pass;

    @IsNumber()
    // @Transform(({value}) => value.trim())
    readonly type;
    
}

    
