/**
 * test와 관련된 api호출 메소드를 선언합니다. 모듈화하여 관리하는 전략입니다.
 * 타입추론이 될 수 있도록 params 또는 payload의 타입과 response의 타입을 명시적으로 지정해줍니다.
 */

import ApiClient from '~/core/api/apiClient';
import type * as types from './projectService.types';

const URLS = {
  READ_PROJECT_LIST: '/project',
  CREATE_PROJECT: '/project',
};

export default class ProjectService {
  private apiClient: ApiClient;

  constructor({ isMock, isPublic }: { isMock: boolean; isPublic: boolean }) {
    this.apiClient = new ApiClient({ isMock, isPublic });
  }

  async readProjectList(): Promise<types.ReadProjectListResponse> {
    const { data } = await this.apiClient.get<types.ReadProjectListResponse>(URLS.READ_PROJECT_LIST);
    console.log(data);
    return data;
  }

  async createProject(payload: types.CreateProjectPayload): Promise<types.CreateProjectResponse> {
    const { data } = await this.apiClient.post<types.CreateProjectResponse>(URLS.CREATE_PROJECT, payload);
    return data;
  }
}
