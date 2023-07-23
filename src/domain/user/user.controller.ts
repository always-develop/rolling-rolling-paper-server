import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('/user')
@UseGuards(AuthGuard())
export class UserController {
  @Get()
  public myInfo() {
    return 'hello';
  }
}
