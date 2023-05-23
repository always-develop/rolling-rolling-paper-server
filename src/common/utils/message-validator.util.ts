import fs from 'fs';
import { parse } from 'csv-parse';

export class MessageValidator {
  private static readonly utf8Encoding: string = 'utf8';
  private static readonly forbiddenWordsFilePath: string =
    '../resources/forbidden-words.csv';

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

    fs.createReadStream(MessageValidator.forbiddenWordsFilePath)
      .pipe(parse({ delimiter: ',', from_line: 2 }))
      .on('data', (row) => {
        result.push(row);
      })
      .on('error', (error) => {
        console.log(error.message);
      })
      .on('end', () => {
        console.log('Done');
      });

    return result;
  }
}
