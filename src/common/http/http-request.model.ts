import { BodyParameter } from './body-parameter.model';
import { HttpHeader } from './http-header.model';
import { QueryParameter } from './query-parameter.model';

export class HttpRequest {
  constructor(
    readonly url: string,
    readonly header?: HttpHeader,
    readonly queryParameter?: QueryParameter,
    readonly bodyParameter?: BodyParameter,
  ) {
    this.url = url;
    this.header = header === undefined ? HttpHeader.default() : header;
    this.queryParameter =
      queryParameter === undefined ? QueryParameter.default() : queryParameter;
    this.bodyParameter =
      bodyParameter === undefined ? BodyParameter.default() : bodyParameter;
  }
}
