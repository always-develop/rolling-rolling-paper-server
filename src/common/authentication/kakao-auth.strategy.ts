import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-kakao';

export class JwtKakaoStrategy extends PassportStrategy(Strategy, 'kakao') {
  constructor() {
    super({
      clientID: process.env.OAUTH_KAKAO_CLIENT_ID,
      clientSecret: process.env.OAUTH_KAKAO_CLIENT_SECRET,
      callbackURL: process.env.OAUTH_KAKAO_REDIRECT,
      scope: ['profile_nickname'],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any) {
    // TODO: define do something...
    return {
      accessToken: accessToken,
      refreshToken: refreshToken,
      name: profile.displayName,
    };
  }
}
