import { RawAxiosRequestHeaders } from 'axios';
import { HeaderItem } from './http-header-items.type';
import { HttpHeaderKey } from './http-header-key.enum';
import { HttpHeaderValue } from './http-header-value.enum';

export class HttpHeader {
  private readonly header: HeaderItem[];

  private constructor(value: HeaderItem[]) {
    this.header = value;
  }

  public static default(): HttpHeader {
    return new HttpHeader([
      {
        key: HttpHeaderKey.CONTENT_TYPE,
        value: HttpHeaderValue.APPLICATION_JSON,
      },
    ]);
  }

  public get(): RawAxiosRequestHeaders {
    return {
      [`${HttpHeaderKey.CONTENT_TYPE.toString()}`]:
        HttpHeaderValue.APPLICATION_JSON.toString(),
    };
  }
}
