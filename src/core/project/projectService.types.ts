/** service에서 사용할 타입들을 정의합니다. */

import { MemberType } from '~/query/common/commonQueries.types';

/** params */

/** payload */

export interface CreateProjectPayload {
  projectTitle: string;
  projectDescription?: string;
  projectThumbnail?: string;
}

/** response */
export type ReadProjectListResponse = ProjectListItemDTO[];
export type CreateProjectResponse = void;

/** DTO */

export interface ProjectListItemDTO {
  projectId: number;
  projectThumbnail?: string;
  projectTitle: string;
  projectDescription?: string;
  author: MemberType;
  members: MemberType[];
}

/** union and etc type */

export interface PaginationType {
  pageNo: number;
  listSize: number;
}
