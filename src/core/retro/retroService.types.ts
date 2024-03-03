/** service에서 사용할 타입들을 정의합니다. */

/** params */

/** payload */
export type CreateRetroPayload = CreateRetroDTO;

/** response */
export type CreateRetroResponse = CreateRetroDTO;

/** DTO */

/** union and etc type */

export interface CreateRetroDTO {
  projectId: number;
  createMemberId: number;
  title: string;
  createTime: string;
  content: string;
  joinMemberIds: number[];
}
