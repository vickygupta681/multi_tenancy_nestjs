import { Body, Controller, Post, Get, Put, Param } from '@nestjs/common';
import { User } from '../entity/user.entity';
import { UserService } from '../services/user.service';

@Controller('user')
export class UserController {
    constructor(private userService : UserService) {
        
    }

    @Post()
    async create(@Body() user: User){
        return this.userService.createUser(user)
    }

    @Get()
    async getAll(){
        return this.userService.findAllUsers();
    }

    // @Put(':tenant_id')
    // async update(
    //     @Param('tenant_id') tenant_id : string,
    //     @Body() user: User){
    //     return this.userService.updateUser(tenant_id, user)
    // }
}
