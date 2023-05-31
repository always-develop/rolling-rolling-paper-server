import { ForbiddenWord } from './forbidden-word.type';
import { ForbiddenWords } from './forbidden-words.entity';

export interface ForbiddenWordRepository {
  findAll(): ForbiddenWords;
  findOne(keyword: string): ForbiddenWord;
}
