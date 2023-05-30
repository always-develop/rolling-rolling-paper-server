import { convertStaticCsvFileToObjectArray } from 'src/common/utils/read-file.util';
import { ForbiddenWordMetaData } from 'src/forbidden-words/forbidden-word.metadata';
import { ForbiddenWord } from 'src/forbidden-words/forbidden-word.type';

describe('message-validator.printForbiddenWords', () => {
  test('금칙어 파일을 읽을 때 예외가 발생하지 않는다.', () => {
    expect(() =>
      convertStaticCsvFileToObjectArray<ForbiddenWord>(
        ForbiddenWordMetaData.get(),
      ),
    ).not.toThrow();
  });

  test('금칙어 객체는 null 이 아니다.', () => {
    expect(() =>
      convertStaticCsvFileToObjectArray<ForbiddenWord>(
        ForbiddenWordMetaData.get(),
      ),
    ).not.toBe(null);
  });
});
