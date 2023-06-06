import { ResourceMetadata } from 'src/common/resources/resource-metadata.interface';
import { ResourceHandler } from 'src/common/resources/resource.handler';

const forbiddenWordHeader: string[] = ['value'];

/**
 * 금칙어 파일에 대한 메타 데이터 클래스
 *
 * 금칙어 목록을 정의한 Csv 파일을 읽어 오브젝트로 변환할 때 사용됨.
 *
 * @since 2023-05-30
 * @author 왕해삼(@kkkkkksssssaaaa)
 */
export class ForbiddenWordMetaData implements ResourceMetadata {
  public static get(): ForbiddenWordMetaData {
    return new ForbiddenWordMetaData();
  }

  colums(): string[] {
    return forbiddenWordHeader;
  }

  path(): string {
    return ResourceHandler.getForbiddenWordPath();
  }
}
