/**
 * test와 관련된 api호출 메소드를 선언합니다. 모듈화하여 관리하는 전략입니다.
 * 타입추론이 될 수 있도록 params 또는 payload의 타입과 response의 타입을 명시적으로 지정해줍니다.
 */

import apiClient from '~/core/api/apiClient';
import type * as types from './retroService.types';

const URLS = {};

export default class TestService {
  private apiClient: typeof apiClient;

  constructor() {
    this.apiClient = apiClient;
  }
}
