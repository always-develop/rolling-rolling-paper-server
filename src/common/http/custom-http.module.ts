import { HttpModule, HttpService } from '@nestjs/axios';
import { CustomHttpFactory } from './custom-http.factory';
import { Module } from '@nestjs/common';
import { HttpHeader } from './http-header.model';
import e from 'express';

@Module({
  imports: [
    HttpModule.registerAsync({
      inject: [CustomHttpFactory],
    }),
  ],
})
export class HttpClient {
  constructor(private readonly httpService: HttpService) {}

  public get<T>(url: string): Promise<T> {
    return this.httpService.axiosRef
      .get(url, {
        headers: HttpHeader.default().get(),
      })
      .then((v) => v.data)
      .catch((err) => {
        throw new Error(err);
      });
  }
}
