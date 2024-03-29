import { ForbiddenWordRepository } from 'src/domain/forbidden-words/forbidden-word.repository';
import { StaticForbiddenWordRepository } from '../../domain/forbidden-words/static-forbidden-word.repository';
import { MessageValidationError } from '../exceptions/message-validation.error';
export class MessageValidator {
  private readonly repository: ForbiddenWordRepository;

  private constructor(repository: ForbiddenWordRepository) {
    this.repository = repository;
  }

  public static setRepository(
    repository: ForbiddenWordRepository = StaticForbiddenWordRepository.getInstance(),
  ): MessageValidator {
    return new MessageValidator(repository);
  }

  public containForbiddenWord(message: string): void {
    if (this.repository.findAll().includedInThisText(message)) {
      throw new MessageValidationError();
    }
  }
}
