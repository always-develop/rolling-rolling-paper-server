import { StringIsMustBeNotEmptyError } from '../exceptions/string-must-be-not-empty.error';
import { BodyParameterType } from './body-parameter.type';

export class BodyParameter {
  private params: BodyParameterType[] = [];

  public static builder(): BodyParameter {
    return new BodyParameter();
  }

  public appendKeyValue(key: string, value: string): BodyParameter {
    return this.append(key, value);
  }

  public toString(): string {
    return (
      '?' + this.params.map((param) => `${param.key}=${param.value}`).join('&')
    );
  }

  private append(key: string, value: string): BodyParameter {
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
      if (target.length === 0) {
        throw new StringIsMustBeNotEmptyError();
      }
    });
  }
}
