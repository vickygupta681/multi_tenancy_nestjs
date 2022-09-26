import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { TenantModule } from './tenant/tenant.module';
import { Tenant } from './tenant/tenant.entity';

@Module({
  imports: [ ConfigModule.forRoot({ isGlobal: true }),
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: parseInt(<string>process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    entities: [ Tenant ],
    synchronize: true,
  }),
  TenantModule,
  UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
