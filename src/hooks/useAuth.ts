import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import * as api from '../services/AuthService'; // Adjust the import path according to your project structure

export const useAuth = () => {
  const queryClient = useQueryClient();

  const { data: user, isLoading, isError } = useQuery(['user'], api.fetchCurrentUser, {
    retry: false,
    refetchOnWindowFocus: false,
  });

  const loginMutation = useMutation<api.LoginResponse, unknown, api.LoginCredentials>(
    (credentials) => api.login(credentials),
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(['user']);
      },
    }
  );

  const login = (email: string, password: string) => {
    return loginMutation.mutate({ email, password });
  };

  return { user, isLoading, isError, login };
};
