import { BodyParameter } from './body-parameter.model';
import { HttpHeader } from './http-header.model';
import { HttpHeaderOption } from './http-request.option';
import { QueryParameter } from './query-parameter.model';

export class HttpRequest {
  public readonly url: string;
  public readonly header: HttpHeader;
  public readonly queryParameter: QueryParameter;
  public readonly bodyParameter: BodyParameter;

  constructor(option: HttpHeaderOption) {
    this.url = option.url;
    this.header = option.header || HttpHeader.default();
    this.queryParameter = option.queryParameter || QueryParameter.default();
    this.bodyParameter = option.bodyParameter || BodyParameter.default();
  }
}
