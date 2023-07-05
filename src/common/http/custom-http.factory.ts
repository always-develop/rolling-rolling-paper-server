import { HttpModuleOptions, HttpModuleAsyncOptions } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CustomHttpFactory implements HttpModuleAsyncOptions {
  constructor(private readonly systemProperty: ConfigService) {}

  public useFactory(): HttpModuleOptions {
    return {
      timeout: this.systemProperty.get('HTTP_CONNECTION_TIMEOUT'),
      maxRedirects: this.systemProperty.get('HTTP_MAX_REDIRECTS'),
    };
  }
}
