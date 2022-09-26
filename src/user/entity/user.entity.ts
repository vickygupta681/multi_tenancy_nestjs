import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity('users')
export class User {
@PrimaryGeneratedColumn()
id: number;

@Column()
brand_name: string;

@Column()
product: string;

@Column()
cost_price: number;

@Column()
selling_price: number;

}