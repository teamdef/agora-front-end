/** service에서 사용할 타입들을 정의합니다. */

/** params */
export type ReadRetroSprintListParams = PaginationType & { projectId: number };
export type ReadRetroSprintDetailParams = { sprintId: number };

/** payload */
export type CreateRetroSprintPayload = CreateRetroSprintDTO;

/** response */
export type ReadRetroSprintListResponse = RetroSprintListItemDTO[];
export type CreateRetroSprintResponse = CreateRetroSprintDTO;
export type ReadRetroSprintDetailResponse = CreateRetroSprintDTO;

/** DTO */

export interface RetroSprintListItemDTO {
  /** retro의 id임 */
  id: number;
  title: string;
  createTime: string;
  projectId: number;
  members: UserType[];
}

export interface CreateRetroSprintDTO {
  projectId: number;
  createMemberId: number;
  title: string;
  createTime: string;
  content: string;
  joinMemberIds: number[];
}

export interface RetroSprintDetailDTO {
  id: 0;
  title: string;
  creator: {
    id: 0;
    nickname: string;
    img: string;
  };
  createTime: string;
  projectId: 0;
  members: [
    {
      id: 0;
      nickname: string;
      img: string;
    },
  ];
  keeps: [
    {
      id: 0;
      reviewId: 0;
      content: string;
      createMemberId: 0;
    },
  ];
  problems: [
    {
      id: 1;
      reviewId: 1;
      content: string;
      createMemberId: 1;
      status: string;
      tries: [
        {
          id: 0;
          problemId: 0;
          createMemberId: 0;
          content: string;
        },
      ];
    },
  ];
}

/** union and etc type */

export interface PaginationType {
  pageNo: number;
  listSize: number;
}

export interface UserType {
  id: number;
  nickname: string;
  img?: string;
}
