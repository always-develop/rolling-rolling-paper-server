import { MessageValidator } from 'src/common/utils/message-validator.util';

export class Message {
  private readonly message: string;

  private constructor(message: string) {
    this.validateMessage(message);

    this.message = message;
  }

  public static of(message: string) {
    return new Message(message);
  }

  private validateMessage(message: string): void {
    MessageValidator.setRepository().containForbiddenWord(message);
  }
}
