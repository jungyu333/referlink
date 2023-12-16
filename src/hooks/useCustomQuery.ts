import { QueryKey, UseQueryOptions, useQuery } from 'react-query';

export const useCustomQuery = <TData = unknown, TError = Error>(
  queryKey: QueryKey,
  queryCallBack: () => Promise<TData>,
  options?: UseQueryOptions<TData, TError>,
) => {
  return useQuery<TData, TError>(queryKey, queryCallBack, options);
};
