import * as types from './retroQueries.types';
import RETRO_QUERY_KEYS from './queryKeys';
import { useMutation, useQuery } from '@tanstack/react-query';
import RetroService from '~/core/retro/retroService';

const retroService = new RetroService({ isMock: false });

export const useReadSprintRetroListQuery = (params: types.UseReadSprintRetroParams) =>
  useQuery({
    queryKey: [RETRO_QUERY_KEYS.SPRINT_RETRO_LIST, params.projectId],
    queryFn: () => retroService.readSprintRetroList(params),
  });

export const useCreateRetroMutation = () =>
  useMutation({
    mutationKey: RETRO_QUERY_KEYS.SPRINT_RETRO_CREATE,
    mutationFn: (payload: types.UseCreateSprintRetroPayload) => retroService.createSprintRetro(payload),
  });
