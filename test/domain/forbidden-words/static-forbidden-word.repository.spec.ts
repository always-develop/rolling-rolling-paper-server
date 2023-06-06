import { ForbiddenWords } from 'src/domain/forbidden-words/forbidden-words.entity';
import { StaticForbiddenWordRepository } from '../../../src/domain/forbidden-words/static-forbidden-word.repository';

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

describe('StaticForbiddenWordRepository', () => {
  test('임의의 금칙어 목록으로 초기화할 수 있다', () => {
    expect(
      () => new StaticForbiddenWordRepository(mockForbiddenWords),
    ).not.toThrow();
  });
});

describe('StaticForbiddenWordRepository.findAll', () => {
  test('임의의 금칙어 목록으로 초기화한 저장소에서 금칙어 목록을 모두 가져올 수 있다.', () => {
    expect(() =>
      new StaticForbiddenWordRepository(mockForbiddenWords).findAll(),
    ).not.toBe(null);
  });

  test('임의의 금칙어 목록으로 초기화한 저장소에서 금칙어 목록 중 첫 번째 요소의 값은 금칙어1 이다.', () => {
    expect(
      new StaticForbiddenWordRepository(mockForbiddenWords)
        .findAll()
        .toArray()[0].value,
    ).toEqual('금칙어1');
  });
});

describe('StaticForbiddenWordRepository.findOne', () => {
  test('임의의 금칙어 목록으로 초기화한 저장소에서 금칙어1 을 찾을 수 있다', () => {
    expect(
      new StaticForbiddenWordRepository(mockForbiddenWords).findOne('금칙어1')
        .value,
    ).toEqual('금칙어1');
  });
});