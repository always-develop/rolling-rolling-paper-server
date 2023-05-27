import path from 'path';

/**
 * 정적 파일에 접근하기 위한 핸들러
 * 모든 모든 정적 파일은 <rootDir>/common/resources 의 하위 디렉토리에 저장되며,
 * 모든 정적 파일에 대한 접근을 직접 허용하지 않고, 해당 클래스를 통해 간접적으로 접근할 수 있음.
 *
 * @since 2023-05-27
 * @author 왕해삼(@kkkkkksssssaaaa)
 * */
export class ResourceHandler {
  private static readonly pathOfForbiddenWordFile: string = `${__dirname}/files/forbidden-words.csv`;

  public static getPathOfForbiddenWordFile(): string {
    return ResourceHandler.pathOfForbiddenWordFile;
  }
}
