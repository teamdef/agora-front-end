export const ERROR_CODE = {
  timeout: 'ECONNABORTED' /** 요청 시간 초과 */,
  internal: 'INTERNAL' /** 서버에서 발생한 오류 */,
};

export const ERROR_NAMES = {
  axiosError: 'AxiosError' /** axios에서 발생한 오류 */,
};

const getHttpErrorMessage = (status?: number) => {
  switch (status) {
    case 400:
      return '잘못된 요청입니다. 요청을 다시 확인한 후 다시 시도해주세요.';
    case 401:
    case 403:
      return '접근 권한이 없습니다. 인증 또는 로그인 후 다시 시도해주세요.';
    case 404:
      return '리소스를 찾을 수 없습니다. 요청하려는 주소를 확인한 후 다시 시도해주세요.';
    case 500:
      return '예상치 못한 에러가 발생했습니다. 잠시 후 다시 시도해주세요.';
    default:
      return '서버에서 처리 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.';
  }
};

const getErrorMessage = (code: string, status?: number) => {
  if (code === ERROR_CODE.timeout) {
    return '요청 시간이 초과되었습니다. 잠시 후 다시 시도해주세요.';
  }
  if (code !== ERROR_CODE.internal) {
    return getHttpErrorMessage(status);
  }
  return '서버에서 처리 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.';
};

/** resetErrorBoundary , error의 타입을 지정해주면 안될듯 ..  */
const GlobalErrorFallback = ({ resetErrorBoundary, error }: { resetErrorBoundary: any; error: any }) => {
  const { code, response } = error;
  const errorMessage = getErrorMessage(code, response?.status);
  return (
    <div>
      {errorMessage}
      <div onClick={resetErrorBoundary}>다시 시도하기</div>
    </div>
  );
};

export default GlobalErrorFallback;
