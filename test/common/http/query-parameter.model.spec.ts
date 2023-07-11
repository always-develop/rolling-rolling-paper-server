import { QueryParameter } from 'src/common/http/query-parameter.model';
import { StringIsMustBeNotEmptyError } from '../../../src/common/exceptions/string-must-be-not-empty.error';

describe('QueryParameter.StringIsMustBeNotEmptyError', () => {
  test('키 값이 null 이면 StringIsMustBeNotEmptyError 를 던진다', () => {
    expect(() =>
      QueryParameter.builder().appendKeyValue(null, 'value'),
    ).toThrow(StringIsMustBeNotEmptyError);
  });

  test('값이 null 이면 StringIsMustBeNotEmptyError 를 던진다', () => {
    expect(() => QueryParameter.builder().appendKeyValue('key', null)).toThrow(
      StringIsMustBeNotEmptyError,
    );
  });
});

describe('QueryParameter.toString', () => {
  test('{key: value} 로 초기화한 QueryParameter 를 문자열로 바꾸면 ?key=value 와 동일한 문자열을 반환한다', () => {
    expect(
      QueryParameter.builder().appendKeyValue('key', 'value').toString(),
    ).toBe('?key=value');
  });

  test('{key: value},{key2: value} 로 초기화한 QueryParameter 를 문자열로 바꾸면 ?key=value&key2=value 와 동일한 문자열을 반환한다', () => {
    expect(
      QueryParameter.builder()
        .appendKeyValue('key', 'value')
        .appendKeyValue('key2', 'value')
        .toString(),
    ).toBe('?key=value&key2=value');
  });
});
