import { useState, useCallback } from 'react';

export const useApi = <T extends (...args: any[]) => any>(apiFunc: T) => {
  const [error, setError] = useState<Error | null>(null);

  const execute = useCallback(
    async (...args: Parameters<T>): Promise<ReturnType<T> | null> => {
      setError(null);
      try {
        const response = await apiFunc(...args);
        return response;
      } catch (err) {
        setError(err as Error);
        return null;
      }
    },
    [apiFunc],
  );

  return { execute, error };
};
