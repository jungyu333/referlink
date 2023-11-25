import { useNavigate } from 'react-router-dom';

const useDetailNavigation = () => {
  const navigation = useNavigate();

  const detailNavigation = (path: string, id: string) =>
    navigation(`${path}/${id}`);

  const pathNavigation = (path: string) => navigation(`${path}`);

  const branchNavigation = (
    path: string,
    secondPath: string,
    flag: boolean,
    email?: string,
  ) => {
    flag
      ? navigation(`${path}`)
      : navigation(`${secondPath}`, { state: { email } });
  };

  return { detailNavigation, pathNavigation, branchNavigation };
};

export default useDetailNavigation;
