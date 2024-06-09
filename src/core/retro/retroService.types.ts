/** service에서 사용할 타입들을 정의합니다. */

import { MemberType } from '~/query/common/commonQueries.types';
import { ProblemStatus } from '~/types/retro/sprint';

/** params */
export type ReadRetroSprintListParams = PaginationType & { projectId: number };
export type ReadRetroSprintDetailParams = { sprintId: number };
export type DeleteRetroSprintParams = { sprintId: number };
export type UpdateRetroSprintTitleParams = { sprintId: number; title: string };
export type DeleteKeepParams = { keepId: number };

export type CreateKeepPayload = {
  retroId: number;
  content: string;
  authorId: number;
};

export type CreateProblemPayload = {
  retroId: number;
  content: string;
  authorId: number;
};
export type UpdateProblemPayload = {
  problemId: number;
  content: string;
};
export type UpdateProblemStatusPayload = {
  problemId: number;
  status: ProblemStatus['value'];
};
export type DeleteProblemParams = { problemId: number };

export type CreateTryPayload = {
  problemId: number;
  content: string;
  authorId: number;
};

export type UpdateTryPayload = {
  tryId: number;
  content: string;
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
  id: number;
  title: string;
  creator: MemberType;
  createTime: string;
  members: MemberType[];
  projectId: number;
  keeps: [];
  problems: ProblemsDTO[];
}

/** union and etc type */

export interface PaginationType {
  pageNo: number;
  listSize: number;
}

export interface ProblemsDTO {
  id: number;
  retroId: number;
  content: string;
  authorId: number;
  status: ProblemStatus['value'];
  tries: TryDTO[];
}

export interface TryDTO {
  id: number;
  problemId: number;
  authorId: number;
  content: string;
}
