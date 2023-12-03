import { useNavigate } from 'react-router-dom';

export const useDetailNavigation = () => {
  const navigation = useNavigate();

  const detailNavigation = (path: string, id: string) =>
    navigation(`${path}/${id}`);

  const pathNavigation = <T extends object>(path: string, state?: T) =>
    navigation(`${path}`, { state });

  const branchNavigation = <T extends object>(
    path: string,
    secondPath: string,
    flag: boolean,
    replace = false,
    state?: T,
  ) => {
    flag
      ? navigation(`${path}`, { replace, state })
      : navigation(`${secondPath}`, { replace, state });
  };

  return { detailNavigation, pathNavigation, branchNavigation };
};
