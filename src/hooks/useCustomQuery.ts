import { AxiosResponse } from 'axios';
import { QueryKey, UseQueryOptions, useQuery } from 'react-query';

export const useCustomQuery = <TData = unknown, TError = Error>(
  queryKey: QueryKey,
  queryCallBack: () => Promise<AxiosResponse<TData>>,
  options?: UseQueryOptions<TData, TError>,
) => {
  const queryFn = async () => {
    const response = await queryCallBack();
    return response.data;
  };
  return useQuery<TData, TError>(queryKey, queryFn, options);
};
