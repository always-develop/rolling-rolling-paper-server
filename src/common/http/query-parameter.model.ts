import { StringIsMustBeNotEmptyError } from '../exceptions/string-must-be-not-empty.error';
import { QueryParameterType } from './query-parameter.type';

export class QueryParameter {
  private params: QueryParameterType[] = [];

  public static builder(): QueryParameter {
    return new QueryParameter();
  }

  public static default(): QueryParameter {
    return new QueryParameter();
  }

  public appendKeyValue(key: string, value: string): QueryParameter {
    return this.append(key, value);
  }

  public toString(): string {
    if (this.params.length === 0) {
      return '';
    }

    return (
      '?' + this.params.map((param) => `${param.key}=${param.value}`).join('&')
    );
  }

  private append(key: string, value: string): QueryParameter {
    this.ifEmptyThrowException(key, value);

    this.params.push({ key, value });
    return this;
  }

  private ifEmptyThrowException(...targets: string[]): void {
    if (null === targets) {
      throw new StringIsMustBeNotEmptyError();
    }

    if (targets.length === 0) {
      throw new StringIsMustBeNotEmptyError();
    }

    targets.forEach((target) => {
      if (null === target) {
        throw new StringIsMustBeNotEmptyError();
      }

      if (undefined === target) {
        throw new StringIsMustBeNotEmptyError();
      }

      if (target.length === 0) {
        throw new StringIsMustBeNotEmptyError();
      }
    });
  }
}
