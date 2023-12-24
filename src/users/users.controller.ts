import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Res } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(
        private readonly usersService: UsersService
    ){}

    @Get()
    getUsers(){
        return this.usersService.findAll()
    }

    @Get(':id')
    getUsersById(@Res() res, @Param('id', ParseIntPipe) id:number){
        if(this.usersService.findOneById(id)){
            res.status(200).send({
                'response': this.usersService.findOneById(id)
            });
        }else{
            res.status(204).send();
        }
    }

    @Post()
    createUser(){

    }

    @Patch(':id')
    updateUser(
        @Param('id', ParseIntPipe) id: number,
        @Body() body: any
    ){
        return body;
    }

    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe) id: number){
        return {
            method: 'delete',
            id
        }
    }
}
