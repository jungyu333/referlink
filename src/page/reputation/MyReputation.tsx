import { Content, EmptyContent } from '@components/reput';
import { useApi } from '@hooks/useApi';
import { getMyReviewList } from 'api';
import { useEffect, useState } from 'react';

export const MyReputation = () => {
  const { execute } = useApi(getMyReviewList);
  const [myReviewList, setMyReviewList] = useState<any>([]);

  const getMyReputationList = async () => {
    const responseResult = await execute();

    if (!(responseResult instanceof Error)) {
      setMyReviewList(responseResult.data);
    }
  };

  useEffect(() => {
    getMyReputationList();
  }, []);

  return <>{myReviewList.length > 0 ? <Content /> : <EmptyContent />}</>;
};
