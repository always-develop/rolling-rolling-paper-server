import { MessageValidator } from 'src/common/utils/message-validator.util';

describe('message-validator.printForbiddenWords', () => {
  test('금칙어를 콘솔에 출력할 수 있다', () => {
    expect(() => MessageValidator.printForbiddenWords()).not.toThrow();
  });
});
