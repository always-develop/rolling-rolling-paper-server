import { HttpHeaderValue } from './http-header-value.enum';
import { HttpHeaderKey } from './http-header-key.enum';

/**
 * Custom Header 에 사용할 Header 에 대한 요소를 별도의 타입으로 구분하여 정의하였음
 *
 * @since 2023-07-02
 * @author 왕해삼(@kkkkkksssssaaaa)
 */
export type HeaderItem = {
  key: HttpHeaderKey;

  // 일부 환경에 따라 바뀌는 value 를 지정할 때(e.g. Access Token)에만 string 타입을 예외적으로 허용함.
  value: HttpHeaderValue | string;
};
