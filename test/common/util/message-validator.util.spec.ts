import { MockForbiddenWordRepopsitory } from '../../stub/mock.forbidden-word.repository';
import { MessageValidator } from '../../../src/common/utils/message-validator.util';
import { MessageValidationError } from '../../../src/common/exceptions/message-validation.error';
const testRepository = MockForbiddenWordRepopsitory.initialize();
const validator: MessageValidator =
  MessageValidator.setRepository(testRepository);

describe('MessageValidator.check()', () => {
  describe('containForbiddenWord', () => {
    test('단어에 금칙어가 포함되어 있다면 MessageValidationError 를 던진다', () => {
      expect(() => validator.containForbiddenWord('금칙어1')).toThrow(
        MessageValidationError,
      );
    });

    test('단어에 금칙어가 포함되어있지 않다면 MessageValidationError 를 던지지 않는다', () => {
      expect(() => validator.containForbiddenWord('귬칙어1')).not.toThrow(
        MessageValidationError,
      );
    });
  });
});
