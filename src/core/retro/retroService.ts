/**
 * test와 관련된 api호출 메소드를 선언합니다. 모듈화하여 관리하는 전략입니다.
 * 타입추론이 될 수 있도록 params 또는 payload의 타입과 response의 타입을 명시적으로 지정해줍니다.
 */

import ApiClient from '~/core/api/apiClient';
import type * as types from './retroService.types';

const URLS = {
  READ_RETRO_SPRINT_LIST: '/retro',
  CREATE_RETRO_SPRINT: '/retro',
  RETRO_SPRINT_DETAIL: (sprintId: number) => `/retro/${sprintId}`,
  CREATE_PROBLEM: `/problem`,
  CREATE_KEEP: `/keep`,
  CREATE_TRY: `/try`,
};

export default class RetroService {
  private apiClient: ApiClient;

  constructor({ isMock }: { isMock: boolean }) {
    this.apiClient = new ApiClient({ isMock });
  }

  async readRetroSprintList(params: types.ReadRetroSprintListParams): Promise<types.ReadRetroSprintListResponse> {
    const { data } = await this.apiClient.get<types.ReadRetroSprintListResponse>(URLS.READ_RETRO_SPRINT_LIST, {
      params,
    });
    return data;
  }

  async createRetroSprint(payload: types.CreateRetroSprintPayload): Promise<types.CreateRetroSprintResponse> {
    const { data } = await this.apiClient.post<types.CreateRetroSprintResponse>(URLS.CREATE_RETRO_SPRINT, payload);
    return data;
  }

  async readRetroSprintDetail(params: types.ReadRetroSprintDetailParams): Promise<types.ReadRetroSprintDetailResponse> {
    const { data } = await this.apiClient.get<types.ReadRetroSprintDetailResponse>(
      URLS.RETRO_SPRINT_DETAIL(params.sprintId),
    );
    return data;
  }

  async createKeep(payload: types.CreateKeepParams) {
    const { data } = await this.apiClient.post(URLS.CREATE_KEEP, payload);
    return data;
  }

  async createProblem(payload: types.CreateProblemParams) {
    const { data } = await this.apiClient.post(URLS.CREATE_PROBLEM, payload);
    return data;
  }

  async createTry(payload: types.CreateTryParams) {
    const { data } = await this.apiClient.post(URLS.CREATE_TRY, payload);
    return data;
  }
}
