import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { TenantModule } from 'src/tenant/tenant.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';

@Module({
  imports: [
    TenantModule
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule { }
