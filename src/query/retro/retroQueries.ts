import { useMutation, useQuery } from '@tanstack/react-query';
import RetroService from '~/core/retro/retroService';
import RETRO_QUERY_KEYS from './queryKeys';
import * as types from './retroQueries.types';

const retroService = new RetroService({ isMock: false });

export const useReadRetroSprintListQuery = (params: types.UseReadRetroSprintParams) =>
  useQuery({
    queryKey: [RETRO_QUERY_KEYS.RETRO_SPRINT_LIST, params.projectId],
    queryFn: () => retroService.readRetroSprintList(params),
  });

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

export const useCreateKeepMutation = () =>
  useMutation({
    mutationKey: RETRO_QUERY_KEYS.RETRO_SPRINT_KEEP_CREATE,
    mutationFn: (payload: types.UseCreateKeepParams) => retroService.createKeep(payload),
  });

export const useCreateProblemMutation = () =>
  useMutation({
    mutationKey: RETRO_QUERY_KEYS.RETRO_SPRINT_PROBLEM_CREATE,
    mutationFn: (payload: types.UseCreateProblemParams) => retroService.createProblem(payload),
  });

export const useCreateTryMutation = () =>
  useMutation({
    mutationKey: RETRO_QUERY_KEYS.RETRO_SPRINT_TRY_CREATE,
    mutationFn: (payload: types.UseCreateTryParams) => retroService.createTry(payload),
  });
