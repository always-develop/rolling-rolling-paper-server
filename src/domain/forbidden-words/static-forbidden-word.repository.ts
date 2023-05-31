import { ForbiddenWordRepository } from './forbidden-word.repository';
import { ForbiddenWords } from './forbidden-words.entity';
import { ForbiddenWord } from './forbidden-word.type';

export class StaticForbiddenWordRepository implements ForbiddenWordRepository {
  constructor(private readonly store: ForbiddenWords) {}

  public findAll(): ForbiddenWords {
    return this.store;
  }

  public findOne(keyword: string): ForbiddenWord {
    return this.store.toArray().find((x) => x.value.includes(keyword));
  }
}
