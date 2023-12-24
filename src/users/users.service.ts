import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    private users = [
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
}
