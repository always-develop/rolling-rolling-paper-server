import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthenticationService } from './authentication.service';
import { Request } from 'express';

@Controller('/auth')
export class AuthenticationController {
  constructor(private readonly service: AuthenticationService) {}

  @UseGuards(AuthGuard('kakao'))
  @Get('/kakao')
  public getAuthorizationFromKakao(@Req() req: Request) {
    console.log(req);
  }

  @Get('/kakao/login')
  public kakaoLoginCallBack(@Req() code: string) {
    return this.service.getTokenByCode(code);
  }
}
