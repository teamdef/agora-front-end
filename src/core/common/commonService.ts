import ApiClient from '~/core/api/apiClient';
import type * as types from './commonService.types';

const URLS = { READ_COMMON_MEMBERS: '/members' };

export default class CommonService {
  private apiClient: ApiClient;

  constructor({ isMock, isPublic }: { isMock: boolean; isPublic: boolean }) {
    this.apiClient = new ApiClient({ isMock, isPublic });
  }

  async readCommonMembers(): Promise<types.ReadCommonMembersResponse> {
    const { data } = await this.apiClient.get<types.ReadCommonMembersResponse>(URLS.READ_COMMON_MEMBERS);
    return data;
  }
}
