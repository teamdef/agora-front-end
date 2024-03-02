/**
 * test와 관련된 api호출 메소드를 선언합니다. 모듈화하여 관리하는 전략입니다.
 * 타입추론이 될 수 있도록 params 또는 payload의 타입과 response의 타입을 명시적으로 지정해줍니다.
 */

import apiClient from '../api/apiClient';

import type * as types from './testService.types';

const Paths = { testList: '/test', testDetail: '/test/detail' };
export default class TestService {
  private apiClient: typeof apiClient;

  constructor() {
    this.apiClient = apiClient;
  }

  readTestList = () => this.apiClient.get<types.ReadTestListResponse>(Paths.testList);

  readTestDetail = (params: types.ReadTestDetailParams) =>
    this.apiClient.get<types.ReadTestDetailResponse>(`${Paths.testDetail}/${params.testId}`);
}
