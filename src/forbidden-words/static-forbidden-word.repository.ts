import { convertStaticCsvFileToObjectArray } from 'src/common/utils/read-file.util';
import { ForbiddenWordRepository } from './forbidden-word.repository';
import { ForbiddenWords } from './forbidden-words.entity';
import { ForbiddenWord } from './forbidden-word.type';
import { ForbiddenWordMetaData } from './forbidden-word.metadata';

export class StaticForbiddenWordRepository implements ForbiddenWordRepository {
  private static readonly staticValues = new ForbiddenWords(
    convertStaticCsvFileToObjectArray<ForbiddenWord>(
      ForbiddenWordMetaData.get(),
    ),
  );

  public findAll(): ForbiddenWords {
    return StaticForbiddenWordRepository.staticValues;
  }

  public findOne(keyword: string): ForbiddenWord {
    return StaticForbiddenWordRepository.staticValues
      .toArray()
      .find((x) => x.value.includes(keyword));
  }
}
