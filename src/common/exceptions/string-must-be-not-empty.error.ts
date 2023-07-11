const message = 'The string value is must be not empty.';

export class StringIsMustBeNotEmptyError extends Error {
  constructor() {
    super(message);
    this.name = 'StringIsMustBeNotEmptyError';
  }
}
