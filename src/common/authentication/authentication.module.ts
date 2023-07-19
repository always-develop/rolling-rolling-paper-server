import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { AuthenticationController } from './authentication.controller';
import { HttpClient } from '../http/custom-http.module';
import { JwtKakaoStrategy } from './kakao-auth.strategy';

@Module({
  imports: [HttpClient],
  providers: [AuthenticationService, JwtKakaoStrategy],
  controllers: [AuthenticationController],
})
export class AuthenticationModule {}
