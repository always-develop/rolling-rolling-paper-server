import { Injectable } from '@nestjs/common';
import { HttpClient } from '../http/custom-http.module';
import { QueryParameter } from '../http/query-parameter.model';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly systemProperty: ConfigService,
  ) {}

  public getSome(): void {
    this.httpClient
      .get<any>({
        url: 'https://naver.com',
      })
      .then((v) => console.log(v))
      .catch((err) => console.log(err));
  }

  public getTokenByCode(code: string) {
    return this.httpClient
      .post<any>({
        url: this.systemProperty.get('OAUTH_KAKAO_TOKEN_URL'),
        queryParameter: QueryParameter.builder()
          .appendKeyValue('code', code)
          .appendKeyValue('grant_type', 'authorization_code')
          .appendKeyValue(
            'redirect_url',
            this.systemProperty.get('OAUTH_KAKAO_REDIRECT'),
          )
          .appendKeyValue(
            'client_id',
            this.systemProperty.get('OAUTH_KAKAO_CLIENT_ID'),
          ),
      })
      .then((v) => {
        return {
          accessToken: String(v.data.access_token),
          refreshToken: String(v.data.refresh_token),
        };
      })
      .catch((err) => console.log(err));
  }
}
