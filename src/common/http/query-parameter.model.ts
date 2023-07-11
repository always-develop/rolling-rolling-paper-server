import { QueryParameterType } from './query-parameter.type';

export class QueryParameter {
  private params: QueryParameterType[];

  public static builder(): QueryParameter {
    return new QueryParameter();
  }

  public appendKeyValue(key: string, value: string): QueryParameter {
    return this.append(key, value);
  }

  public toString(): string {
    return '?' + this.params.map((param) => param.key).join(',');
  }

  private append(key: string, value: string): QueryParameter {
    this.ifEmptyThrowException(key);
    this.ifEmptyThrowException(value);

    this.params.push({ key, value });
    return this;
  }

  private ifEmptyThrowException(target: string): void {
    if (null === target) {
      throw new Error('query parameter is must be not null');
    }

    if (target.length === 0) {
      throw new Error('query parameter is must be not empty');
    }
  }
}
