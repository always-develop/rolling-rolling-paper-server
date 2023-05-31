import { ForbiddenWord } from './forbidden-word.type';

/**
 * 금칙어 오브젝트에 대한 배열을 클래스 변수로 갖는 일급 컬렉션 객체
 */
export class ForbiddenWords {
  constructor(private readonly values: ForbiddenWord[]) {}

  public toArray(): ForbiddenWord[] {
    return this.values;
  }
}
