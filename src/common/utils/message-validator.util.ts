import * as fs from 'fs';
import { parse } from 'csv-parse';
import {
  ForbiddenWord,
  forbiddenWordHeader,
} from '../../forbidden-words/forbidden-words.entity';
import { ResourceHandler } from '../resources/resource.handler';

export class MessageValidator {
  private static readonly forbiddenWordsFilePath: string =
    ResourceHandler.getPathOfForbiddenWordFile();

  private static readonly forbiddenWords: string[] = this.readFiles();

  private constructor() {
    throw new Error('Cannot be instanced util class.');
  }

  public static printForbiddenWords(): void {
    this.forbiddenWords.forEach((word) => {
      console.log(word);
    });
  }

  private static readFiles(): string[] {
    const result: string[] = [];

    const fileToString: string = fs.readFileSync(
      MessageValidator.forbiddenWordsFilePath,
      {
        encoding: 'utf8',
      },
    );

    parse(
      fileToString,
      {
        delimiter: ',',
        columns: forbiddenWordHeader,
      },
      (error, result: ForbiddenWord[]) => {
        if (error) {
          console.error(error);
        }

        console.log('Result', result);
      },
    );

    return result;
  }
}
