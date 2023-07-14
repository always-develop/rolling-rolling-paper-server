import { Injectable } from '@nestjs/common';
import { HttpClient } from '../http/custom-http.module';
import { Token } from '../http/token.type';
import { HttpHeader } from '../http/http-header.model';
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

  public getKakaoToken(code: string) {
    return this.httpClient
      .post<any>({
        url: this.systemProperty.get(''),
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
