import axios from 'axios';

import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const MOCK_BASE_URL = 'http://localhost:3000/api';
const BASE_URL =
  process.env.NODE_ENV === 'development' ? process.env.NEXT_PUBLIC_DEV_API_HOST : process.env.NEXT_PUBLIC_PROD_API_HOST;
const TIMEOUT = 10 * 1000;

/** axios 응답 타입 제어를 위해서 기존 axios client를 커스텀함.
 * @see https://stack94.tistory.com/entry/TypeScript-Axios-TypeScript-%EC%A0%81%EC%9A%A9%ED%95%98%EC%97%AC-%EC%82%AC%EC%9A%A9%ED%95%B4%EB%B3%B4%EC%9E%90
 *  msw서버를 사용할 것인지, 실제 서버 호출할 것인지 선택가능할 듯
 */

const PRIVATE_HEADER = {
  // Authorization: process.env.NEXT_PUBLIC_DEV_API_TOKEN,
  'Content-Type': 'application/json',
};
const PUBLIC_HEADER = {
  'Content-Type': 'application/json',
};

export default class HTTPProvider {
  private client: AxiosInstance;

  constructor({ isMock, isPublic }: { isMock: boolean; isPublic: boolean }) {
    this.client = axios.create({
      baseURL: isMock ? MOCK_BASE_URL : BASE_URL,
      timeout: TIMEOUT,
      headers: isPublic ? PUBLIC_HEADER : PRIVATE_HEADER,
      responseType: 'json' as const,
    });
  }

  get<T>(path: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.client.get<T>(path, config);
  }

  post<T>(path: string, body?: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.client.post<T>(path, body, config);
  }

  postFormData<T>(path: string, formData: FormData): Promise<AxiosResponse<T>> {
    return this.client.postForm<T>(path, formData);
  }

  put<T>(path: string, body?: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.client.put<T>(path, body, config);
  }

  patch<T>(path: string, body?: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.client.patch<T>(path, body, config);
  }

  delete<T>(path: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.client.delete<T>(path, config);
  }
}
