/** service에서 사용할 타입들을 정의합니다. */

/** params */

export interface ReadTestDetailParams {
  testId: number;
}

/** payload */

/** response */
export type ReadTestListResponse = TestDTO[];
export type ReadTestDetailResponse = TestDTO;

/** DTO */
export interface TestDTO {
  testId: number;
  contents: string;
}
/** union and etc type */
