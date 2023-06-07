import { ForbiddenWords } from 'src/domain/forbidden-words/forbidden-words.entity';

const mockForbiddenWords = ForbiddenWords.initializeArrayOfForbiddenWord([
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

describe('ForbiddenWords.includedInThisText', () => {
  test('인자로 금칙어를 넘기면 true 를 반환한다', () => {
    expect(mockForbiddenWords.includedInThisText('금칙어1')).toBeTruthy();
  });

  test('텍스트 중 금칙어가 포함되어 있다면 true 를 반환한다', () => {
    expect(
      mockForbiddenWords.includedInThisText('이거슨 금칙어1 입니당'),
    ).toBeTruthy();
  });

  test('띄어쓰기 없는 텍스트에 금칙어가 포함되어 있다면 true 를 반환한다', () => {
    expect(
      mockForbiddenWords.includedInThisText('이거슨금칙어1입니당'),
    ).toBeTruthy();
  });

  test('금칙어가 포함되지 않은 텍스트라면 false 를 반환한다', () => {
    expect(mockForbiddenWords.includedInThisText('귬칙어1')).toBeFalsy();
  });

  test('금칙어 중 일부만 포함된 텍스트라면 false 를 반환한다', () => {
    expect(
      mockForbiddenWords.includedInThisText('이거슨 금칙어 입니당'),
    ).toBeFalsy();
  });
});
