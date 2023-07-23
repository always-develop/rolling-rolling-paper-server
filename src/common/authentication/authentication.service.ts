import { Injectable } from '@nestjs/common';
import { HttpClient } from '../http/custom-http.module';
import { QueryParameter } from '../http/query-parameter.model';
import { ConfigService } from '@nestjs/config';
import { HttpRequest } from '../http/http-request.model';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly systemProperty: ConfigService,
  ) {}

  public getSome(): void {
    this.httpClient
      .get<any>(
        new HttpRequest({
          url: 'https://naver.com',
        }),
      )
      .then((v) => console.log(v))
      .catch((err) => console.log(err));
  }

  public getTokenByCode(code: string) {
    return this.httpClient
      .post<any>(
        new HttpRequest({
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
        }),
      )
      .then((v) => {
        console.log(v);
        return {
          accessToken: String(v.access_token),
          refreshToken: String(v.refresh_token),
        };
      })
      .catch((err) => console.log(err));
  }
}
