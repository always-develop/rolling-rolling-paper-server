import { RawAxiosRequestHeaders } from 'axios';
import { HeaderItem } from './http-header-items.type';
import { HttpHeaderKey } from './http-header-key.enum';
import { HttpHeaderValue } from './http-header-value.enum';

export class HttpHeader {
  private header: HeaderItem[];

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

  public static builder(): HttpHeader {
    return new HttpHeader([]);
  }

  public appendKeyValue(key: HttpHeaderKey, value: HttpHeaderValue | string) {
    this.header.push({ key, value });
    return this;
  }

  public toAxiosHeader(): RawAxiosRequestHeaders {
    const result: RawAxiosRequestHeaders = {};

    this.header.forEach((v) => (result[v.key.toString()] = v.value.toString()));

    return result;
  }
}
