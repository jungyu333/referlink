import { useNavigate } from 'react-router-dom';

const useDetailNavigation = (path: string, id?: number) => {
  const navigation = useNavigate();

  const detailNavigation = () => navigation(`/${path}/${id}`);

  const pathNavigation = () => navigation(`/${path}`);

  return { detailNavigation, pathNavigation };
};

export default useDetailNavigation;
