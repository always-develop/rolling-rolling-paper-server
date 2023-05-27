export type ForbiddenWord = {
  value: string;
};

export const forbiddenWordHeader: string[] = ['value'];

export class ForbiddenWords {
  constructor(private readonly values: ForbiddenWord[]) {}
}
