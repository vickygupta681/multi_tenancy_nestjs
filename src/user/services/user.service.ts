import { Inject, Injectable } from '@nestjs/common';
import { TENANT_CONNECTION } from 'src/tenant/tenant.module';
import { User } from '../entity/user.entity';

@Injectable()
export class UserService {
    constructor(@Inject(TENANT_CONNECTION) private connection
    ){}

    async createUser(user : User){
        
        const repository = await this.connection.getRepository(User);
        repository.save(user)
        return user;
    }

    async findAllUsers(): Promise<User[]> { 
    const repository = await this.connection.getRepository(User);
        return repository.find();
    }

    // async updateUser(tenant_id : string, user : User){
    //     const repository = await this.connection.getRepository(User);
    //     this.userRepository.update(tenant_id, user)
    // }
}

