/** service에서 사용할 타입들을 정의합니다. */

import { MemberDTO } from "../common/commonService.types";

/** params */
export type ReadSprintRetroListParams = PaginationType & { projectId: number };

/** payload */
export type CreateSprintRetroPayload = CreateSprintRetroDTO;

/** response */
export type ReadSprintRetroListResponse = SprintRetroListItemDTO[];
export type CreateSprintRetroResponse = CreateSprintRetroDTO;

/** DTO */

export interface SprintRetroListItemDTO {
  /** retro의 id임 */
  id: number;
  title: string;
  createTime: string;
  projectId: number;
  members: MemberDTO[];
}

export interface CreateSprintRetroDTO {
  projectId: number;
  createMemberId: number;
  title: string;
  createTime: string;
  content: string;
  joinMemberIds: number[];
}

/** union and etc type */

export interface PaginationType {
  pageNo: number;
  listSize: number;
}

