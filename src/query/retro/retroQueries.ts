import { useMutation, useQuery } from '@tanstack/react-query';
import RetroService from '~/core/retro/retroService';
import RETRO_QUERY_KEYS from './queryKeys';
import * as types from './retroQueries.types';

const retroService = new RetroService({ isMock: false, isPublic: false });

export const useReadRetroSprintListQuery = (params: types.UseReadRetroSprintParams) => {
  const { projectId } = params;
  return useQuery({
    queryKey: [RETRO_QUERY_KEYS.RETRO_SPRINT_LIST, projectId],
    queryFn: () => retroService.readRetroSprintList(params),
    enabled: projectId === 0 || projectId ? true : false,
  });
};

// 회고 생성
export const useCreateRetroMutation = () =>
  useMutation({
    mutationKey: RETRO_QUERY_KEYS.RETRO_SPRINT_CREATE,
    mutationFn: (payload: types.UseCreateRetroSprintPayload) => retroService.createRetroSprint(payload),
  });

// 회고 상세 조회
export const useReadRetroSprintDetailQuery = (params: types.UseReadRetroSprintDetailParams) =>
  useQuery({
    queryKey: RETRO_QUERY_KEYS.RETRO_SPRINT_DETAIL,
    queryFn: () => retroService.readRetroSprintDetail(params),
    enabled: !!params.sprintId,
  });

// 회고 삭제
export const useDeleteRetroSprintMutation = (params: types.UseDeleteRetroSprintParams) =>
  useMutation({
    mutationKey: [RETRO_QUERY_KEYS.RETRO_SPRINT_DELETE, params.sprintId],
    mutationFn: (payload: types.UseDeleteRetroSprintParams) => retroService.deleteRetroSprint(payload),
  });

// 회고 제목 변경
export const useUpdateRetroSprintTitleMutation = (params: types.UseUpdateRetroSprintTitleParams) =>
  useMutation({
    mutationKey: [RETRO_QUERY_KEYS.RETRO_SPRINT_TITLE_UPDATE, params.sprintId],
    mutationFn: (payload: types.UseUpdateRetroSprintTitleParams) => retroService.updateRetroSprintTitle(payload),
  });

// keep 생성
export const useCreateKeepMutation = () =>
  useMutation({
    mutationKey: RETRO_QUERY_KEYS.RETRO_SPRINT_KEEP_CREATE,
    mutationFn: (payload: types.UseCreateKeepPayload) => retroService.createKeep(payload),
  });

// keep 삭제

export const useDeleteKeepMutation = () =>
  useMutation({
    mutationKey: RETRO_QUERY_KEYS.RETRO_SPRINT_KEEP_DELETE,
    mutationFn: (payload: types.UseDeleteKeepParams) => retroService.deleteKeep(payload),
  });

// problem 생성
export const useCreateProblemMutation = () =>
  useMutation({
    mutationKey: RETRO_QUERY_KEYS.RETRO_SPRINT_PROBLEM_CREATE,
    mutationFn: (payload: types.UseCreateProblemPayload) => retroService.createProblem(payload),
  });

export const useUpdateProblemMutation = () =>
  useMutation({
    mutationKey: RETRO_QUERY_KEYS.RETRO_SPRINT_PROBLEM_CREATE,
    mutationFn: (payload: types.UseUpdateProblemPayload) => retroService.updateProblem(payload),
  });

export const useDeleteProblemMutation = () =>
  useMutation({
    mutationKey: RETRO_QUERY_KEYS.RETRO_SPRINT_PROBLEM_DELETE,
    mutationFn: (payload: types.UseDeleteProblemParams) => retroService.deleteProblem(payload),
  });

export const useCreateTryMutation = () =>
  useMutation({
    mutationKey: RETRO_QUERY_KEYS.RETRO_SPRINT_TRY_CREATE,
    mutationFn: (payload: types.UseCreateTryPayload) => retroService.createTry(payload),
  });

export const useUpdateTryMutation = () =>
  useMutation({
    mutationKey: RETRO_QUERY_KEYS.RETRO_SPRINT_TRY_UPDATE,
    mutationFn: (payload: types.UseUpdateTryPayload) => retroService.updateTry(payload),
  });
