import { useMutation, useQuery, useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import ProjectService from '~/core/project/projectService';
import PROJECT_QUERY_KEYS from './queryKeys';
import * as types from './projectQueries.types';

const projectService = new ProjectService({ isMock: false });

export const useReadProjectListQuery = () =>
  useQuery({
    queryKey: PROJECT_QUERY_KEYS.PROJECT_LIST,
    queryFn: () => projectService.readProjectList(),
  });

export const useCreateProjectMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: PROJECT_QUERY_KEYS.PROJECT_CREATE,
    mutationFn: (payload: types.UseCreateProjectPayload) => projectService.createProject(payload),
  });
};
