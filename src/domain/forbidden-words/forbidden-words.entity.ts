import { convertStaticCsvFileToObjectArray } from 'src/common/utils/read-file.util';
import { ForbiddenWord } from './forbidden-word.type';
import { ForbiddenWordMetaData } from './forbidden-word.metadata';

/**
 * 금칙어 오브젝트에 대한 배열을 클래스 변수로 갖는 일급 컬렉션 객체
 */
export class ForbiddenWords {
  private constructor(private readonly values: ForbiddenWord[]) {}

  public static initializeStaticFiels(): ForbiddenWords {
    return new ForbiddenWords(
      convertStaticCsvFileToObjectArray<ForbiddenWord>(
        ForbiddenWordMetaData.get(),
      ),
    );
  }

  public static initializeArrayOfForbiddenWord(values: ForbiddenWord[]) {
    return new ForbiddenWords(values);
  }

  public isContainThis(value: string): boolean {
    return this.toArray().some((word) => value.includes(word.value));
  }

  public toArray(): ForbiddenWord[] {
    return this.values;
  }
}
