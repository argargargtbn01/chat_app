import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UseGuards } from '@nestjs/common';
import { FirebaseAuthGuard } from './users/guards/firebase-auth.guard';
import { CurrentUser } from 'src/shared/base/decorators/current-user.decorator';
import { User } from './users/models/user.schema';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(FirebaseAuthGuard)
  @Get('authenticate')
  async authen(@CurrentUser() user: User) {
    return await this.authService.authenticate(user);
  }
}
