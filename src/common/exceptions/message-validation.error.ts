const message = 'Failed validation';

export class MessageValidationError extends Error {
  constructor() {
    super(message);
    this.name = 'MessageValidationError';
  }
}
