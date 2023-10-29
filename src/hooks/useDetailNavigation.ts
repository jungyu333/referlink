import { useNavigate } from 'react-router-dom';

const useDetailNavigation = (path: string) => {
  const navigation = useNavigate();

  const detailNavigation = (id: string) => navigation(`/${path}/${id}`);

  const pathNavigation = () => navigation(`/${path}`);

  return { detailNavigation, pathNavigation };
};

export default useDetailNavigation;
