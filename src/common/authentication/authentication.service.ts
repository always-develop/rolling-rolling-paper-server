import { Injectable } from '@nestjs/common';
import { HttpClient } from '../http/custom-http.module';

@Injectable()
export class AuthenticationService {
  constructor(private readonly httpClient: HttpClient) {}

  public getSome(): void {
    this.httpClient
      .get<any>('https://naver.com')
      .then((v) => console.log(v))
      .catch((err) => console.log(err));
  }
}
