import * as fs from 'fs';
import { parse } from 'csv-parse';
import { ResourceMetadata } from '../resources/resource-metadata';

export function convertStaticCsvFileToObjectArray<T>(
  resource: ResourceMetadata,
): T[] {
  const result: T[] = [];

  const fileToString: string = fs.readFileSync(resource.path(), {
    encoding: 'utf8',
  });

  parse(
    fileToString,
    {
      delimiter: ',',
      columns: resource.colums(),
    },
    (error, result: T[]) => {
      if (error) {
        console.error(error);
      }

      console.log('result', result);
    },
  );

  return result;
}
