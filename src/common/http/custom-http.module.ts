import { HttpModule, HttpService } from '@nestjs/axios';
import { CustomHttpFactory } from './custom-http.factory';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    HttpModule.registerAsync({
      inject: [CustomHttpFactory],
    }),
  ],
})
export class HttpClient {
  constructor(private readonly httpService: HttpService) {}

  // public get<T>(): Promise<T> {
  //   return this.httpService.get
  // }

  return () => {

  }
}
