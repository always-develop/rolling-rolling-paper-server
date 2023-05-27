export class ResourceHandler {
  private static readonly pathOfForbiddenWordFile: string =
    '../resources/forbidden-words.csv';

  public static getPathOfForbiddenWordFile(): string {
    return ResourceHandler.pathOfForbiddenWordFile;
  }
}
