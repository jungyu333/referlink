import { AxiosError } from 'axios';
import { useCallback } from 'react';

export const useApi = <T extends (...args: any[]) => any>(apiFunc: T) => {
  const execute = useCallback(
    async (...args: Parameters<T>): Promise<ReturnType<T> | Error> => {
      try {
        const response = await apiFunc(...args);
        return response;
      } catch (err) {
        const errorObj = err as AxiosError;
        return errorObj;
      }
    },
    [apiFunc],
  );

  return { execute };
};
