import { BadRequestException, Injectable } from '@nestjs/common';

import { CreateUserDto, UpdateUserDto } from './dto/index'

@Injectable()
export class UsersService {

    private users: CreateUserDto[] = [
        {"id": 1, "email": "user1@corre.com", "nickname": "user1", "password": "Qwerty9601"},
        {"id": 2, "email": "user2@corre.com", "nickname": "user2", "password": "Qwerty9601"},
        {"id": 3, "email": "user3@corre.com", "nickname": "user3", "password": "Qwerty9601"}
    ];

    findAll() {
        return this.users
    }
    
    findOneById(id: number){
        const user =  this.users.find( users => users.id == id)
        return user
    }

    create( createCarDto: CreateUserDto ){

        const user:CreateUserDto = {
            id: 10,
            email: 'user4@corre.com',
            nickname: 'user4',
            password: 'Qwerty9601'
        }

        this.users.push(user)

        return createCarDto
    }

    update( id: number, updateUserDto: UpdateUserDto){

        let index = this.users.findIndex(user => user.id === +id)

        if(index == -1){
            throw new BadRequestException(`Usuario con id ${id} no existe`)
        }

        const user:UpdateUserDto = {
            id: 10,
            email: 'richard.fuentes@corre.com',
            nickname: 'richard.fuentes',
            password: 'Qwerty9601'
        }

        this.users[index].email = user.email
        this.users[index].nickname = user.nickname
        this.users[index].password = user.password
        
        return updateUserDto

    }

    delete( id:number ){
        
        let index = this.users.findIndex(user => user.id === +id)

        if(index == -1){
            throw new BadRequestException(`Usuario con id ${id} no existe`)
        }

        const user = this.findOneById( id )
        this.users = this.users.filter( user => user.id !== id )

    }
}
