import CommonService from '~/core/common/commonService';
import * as types from './commonQueries.types';
import COMMON_QUERY_KEYS from './queryKeys';
import { useQuery } from '@tanstack/react-query';

const commonService = new CommonService({ isMock: false });

export const useReadCommonMembersQuery = () =>
  useQuery({
    queryKey: [COMMON_QUERY_KEYS.COMMON_MEMBERS],
    queryFn: () => commonService.readCommonMembers(),
  });
