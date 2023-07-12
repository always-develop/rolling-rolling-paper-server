import { BodyParameter } from './body-parameter.model';
import { HttpHeader } from './http-header.model';
import { QueryParameter } from './query-parameter.model';

export class HttpRequest {
  private _header?: HttpHeader;
  private _queryParameter?: QueryParameter;
  private _bodyParameter?: BodyParameter;

  constructor(private readonly url: string) {}

  public static to(url: string): HttpRequest {
    return new HttpRequest(url);
  }

  public getUrl(): string {
    return this.url;
  }

  public getHeader(): HttpHeader {
    return this._header === null ? HttpHeader.default() : this._header;
  }

  public getQueryParameter(): QueryParameter {
    return this._queryParameter;
  }

  public getBodyParameter(): BodyParameter {
    return this._bodyParameter;
  }

  public header(header: HttpHeader): HttpRequest {
    this._header = header;
    return this;
  }

  public queryParameter(queryParameter: QueryParameter): HttpRequest {
    this._queryParameter = queryParameter;
    return this;
  }

  public bodyParameter(bodyParameter: BodyParameter): HttpRequest {
    this._bodyParameter = bodyParameter;
    return this;
  }
}
