import { useMutation, useQuery } from '@tanstack/react-query';
import RetroService from '~/core/retro/retroService';
import RETRO_QUERY_KEYS from './queryKeys';
import * as types from './retroQueries.types';

const retroService = new RetroService({ isMock: false });

export const useReadRetroSprintListQuery = (params: types.UseReadRetroSprintParams) => {
  const { projectId } = params;
  return useQuery({
    queryKey: [RETRO_QUERY_KEYS.RETRO_SPRINT_LIST, projectId],
    queryFn: () => retroService.readRetroSprintList(params),
    enabled: projectId === 0 || projectId ? true : false,
  });
};

export const useCreateRetroMutation = () =>
  useMutation({
    mutationKey: RETRO_QUERY_KEYS.RETRO_SPRINT_CREATE,
    mutationFn: (payload: types.UseCreateRetroSprintPayload) => retroService.createRetroSprint(payload),
  });

export const useReadSprintRetroDetailQuery = (params: types.UseReadRetroSprintDetailParams) =>
  useQuery({
    queryKey: [RETRO_QUERY_KEYS.RETRO_SPRINT_DETAIL, params],
    queryFn: () => retroService.readRetroSprintDetail(params),
    enabled: !!params.sprintId,
  });

export const useCreateProblemMutation = () =>
  useMutation({
    mutationKey: RETRO_QUERY_KEYS.RETRO_SPRINT_PROBLEM_CREATE,
    mutationFn: (payload: types.UseCreateProblemParams) => retroService.createProblem(payload),
  });

export const useCreateKeepMutation = () =>
  useMutation({
    mutationKey: RETRO_QUERY_KEYS.RETRO_SPRINT_KEEP_CREATE,
    mutationFn: (payload: types.UseCreateKeepParams) => retroService.createKeep(payload),
  });
