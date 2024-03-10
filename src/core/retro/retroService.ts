/**
 * test와 관련된 api호출 메소드를 선언합니다. 모듈화하여 관리하는 전략입니다.
 * 타입추론이 될 수 있도록 params 또는 payload의 타입과 response의 타입을 명시적으로 지정해줍니다.
 */

import ApiClient from '~/core/api/apiClient';
import type * as types from './retroService.types';

const URLS = { READ_SPRINT_RETRO_LIST: '/retro', CREATE_SPRINT_RETRO: '/retro' };

export default class RetroService {
  private apiClient: ApiClient;

  constructor({ isMock }: { isMock: boolean }) {
    this.apiClient = new ApiClient({ isMock });
  }

  async readSprintRetroList(params: types.ReadSprintRetroListParams): Promise<types.ReadSprintRetroListResponse> {
    const renameParams = {
      size: params.listSize,
      page: params.pageNo,
      projectId: params.projectId,
    };
    const { data } = await this.apiClient.get<types.ReadSprintRetroListResponse>(URLS.READ_SPRINT_RETRO_LIST, {
      params: renameParams,
    });
    return data;
  }

  async createSprintRetro(payload: types.CreateSprintRetroPayload): Promise<types.CreateSprintRetroResponse> {
    const { data } = await this.apiClient.post<types.CreateSprintRetroResponse>(URLS.CREATE_SPRINT_RETRO, payload);
    return data;
  }
}
