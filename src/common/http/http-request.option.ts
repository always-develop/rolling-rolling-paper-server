import { BodyParameter } from './body-parameter.model';
import { HttpHeader } from './http-header.model';
import { QueryParameter } from './query-parameter.model';

export type HttpHeaderOption = {
  url: string;
  header?: HttpHeader;
  queryParameter?: QueryParameter;
  bodyParameter?: BodyParameter;
};
