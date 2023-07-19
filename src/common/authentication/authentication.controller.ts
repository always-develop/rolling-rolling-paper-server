import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthenticationService } from './authentication.service';

@Controller('/auth')
export class AuthenticationController {
  constructor(private readonly service: AuthenticationService) {}

  @UseGuards(AuthGuard('kakao'))
  @Get('/login/kakao')
  public doLoginByKakao(@Req() req) {
    console.log(req);
    return req;
  }
}
