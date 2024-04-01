/** service에서 사용할 타입들을 정의합니다. */

/** params */

/** payload */

/** response */
export type ReadCommonMembersResponse = MemberDTO[];

/** DTO */

export interface MemberDTO {
  id: number;
  name: string;
  nickname: string;
  profileImg: string;
}
