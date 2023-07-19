import { HttpModule, HttpService } from '@nestjs/axios';
import { CustomHttpFactory } from './custom-http.factory';
import { Module } from '@nestjs/common';
import { HttpRequest } from './http-request.model';

@Module({
  imports: [
    HttpModule.registerAsync({
      inject: [CustomHttpFactory],
      extraProviders: [CustomHttpFactory],
      useFactory: (factory: CustomHttpFactory) => {
        return factory.useFactory();
      },
    }),
  ],
  exports: [HttpClient],
})
export class HttpClient {
  constructor(private readonly httpService: HttpService) {}

  public get<T>(request: HttpRequest): Promise<T> {
    return this.httpService.axiosRef
      .get(`${request.url}${request.queryParameter.toString()}`, {
        headers: request.header.toAxiosHeader(),
      })
      .then((v) => v.data)
      .catch((err) => {
        throw new Error(err);
      });
  }

  public post<T>(request: HttpRequest): Promise<T> {
    return this.httpService.axiosRef
      .post(
        `${request.url}${request.queryParameter.toString()}`,
        request.bodyParameter,
        {
          headers: request.header.toAxiosHeader(),
        },
      )
      .then((v) => v.data)
      .catch((err) => {
        throw new Error(err);
      });
  }
}
