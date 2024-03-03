import * as types from './retroQueries.types';
import RETRO_QUERY_KEYS from './queryKeys';
import { useMutation, useQuery } from '@tanstack/react-query';
import RetroService from '~/core/retro/retroService';

const retroService = new RetroService({ isMock: false });

export const useCreateRetroMutation = () =>
  useMutation({
    mutationFn: (payload: types.UseCreateRetroPayload) => retroService.createRetro(payload),
    mutationKey: RETRO_QUERY_KEYS.RETRO_CREATE,
  });
