import { ForbiddenWords } from 'src/domain/forbidden-words/forbidden-words.entity';
import { ForbiddenWordRepository } from '../../src/domain/forbidden-words/forbidden-word.repository';

export const mockForbiddenWords: ForbiddenWords =
  ForbiddenWords.initializeArrayOfForbiddenWord([
    {
      value: '금칙어1',
    },
    {
      value: '금칙어2',
    },
    {
      value: '금칙어3',
    },
  ]);

export class MockForbiddenWordRepopsitory implements ForbiddenWordRepository {
  public findAll(): ForbiddenWords {
    return mockForbiddenWords;
  }
}
