import { Controller, Get } from '@nestjs/common';

@Controller('admins')
export class AdminsController {

    @Get()
    getUsers(){
        return [ 
            {"id": 1, "email": "admin@corre.com", "nickname": "admin", "password": "Qwerty9601"}
        ]
    }

}
