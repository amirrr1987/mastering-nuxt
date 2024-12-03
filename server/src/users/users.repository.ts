import { Injectable } from '@nestjs/common';
import { User as UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepository extends Repository<UserEntity> {}
