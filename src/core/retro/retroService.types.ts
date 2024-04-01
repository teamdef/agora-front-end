/** service에서 사용할 타입들을 정의합니다. */

import { MemberType } from '~/query/common/commonQueries.types';

/** params */
export type ReadRetroSprintListParams = PaginationType & { projectId: number };
export type ReadRetroSprintDetailParams = { sprintId: number };

export type CreateKeepParams = {
  retroId: number;
  content: string;
  authorId: number;
};

export type CreateProblemParams = {
  retroId: number;
  content: string;
  authorId: number;
};

/** payload */
export type CreateRetroSprintPayload = CreateRetroSprintDTO;

/** response */
export type ReadRetroSprintListResponse = RetroSprintListItemDTO[];
export type CreateRetroSprintResponse = CreateRetroSprintDTO;
export type ReadRetroSprintDetailResponse = RetroSprintDetailDTO;

/** DTO */

export interface RetroSprintListItemDTO {
  /** retro의 id임 */
  id: number;
  title: string;
  createTime: string;
  projectId: number;
  members: MemberType[];
}

export interface CreateRetroSprintDTO {
  projectId: number;
  authorId: number;
  title: string;
  createTime: string;
  content: string;
  joinMemberIds: number[];
}

export interface RetroSprintDetailDTO {
  id: 0;
  title: string;
  author: MemberType;
  createTime: string;
  members: MemberType[];
  projectId: 0;
  keeps: [];
  problems: [];
}

/** union and etc type */

export interface PaginationType {
  pageNo: number;
  listSize: number;
}
