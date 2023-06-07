import { ForbiddenWords } from './forbidden-words.entity';

export interface ForbiddenWordRepository {
  findAll(): ForbiddenWords;
}
