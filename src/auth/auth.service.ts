import { Injectable } from '@nestjs/common';
import { User } from './users/models/user.schema';

@Injectable()
export class AuthService {
  async login(user: User): Promise<User> {
    return user;
  }
  async authenticate(user: any): Promise<any> {
    try {
      return user;
    } catch (error) {
      throw error;
    }
  }
}
