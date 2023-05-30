/**
 * 정적 리소스에 대한 메타 데이터를 정의하기 위한 인터페이스
 *
 * 프로젝트에서 다룰 정적 리소스가 존재한다면, 해당 인터페이스를 구현하여 static file -> custom object 로 구현할 때 사용할 것.
 *
 * @see ResourceHandler
 * @see convertStaticCsvFileToObjectArray;
 *
 * @since 2023-05-30
 * @author 왕해삼(@kkkkkksssssaaaa)
 */
export interface ResourceMetadata {
  colums(): string[];
  path(): string;
}
