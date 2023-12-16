import { getMyReviewList } from '@api/reputation';
import { Content, EmptyContent } from '@components/reput';
import { useApi } from '@hooks/useApi';
import { useEffect, useState } from 'react';
import { LoadingSpinner } from 'referlink-ui';

export const MyReputation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { execute } = useApi(getMyReviewList);
  const [myReviewList, setMyReviewList] = useState<any>([]);

  const getMyReputationList = async () => {
    const responseResult = await execute();

    if (!(responseResult instanceof Error)) {
      setMyReviewList(responseResult.data);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getMyReputationList();
  }, []);

  return (
    <LoadingSpinner isLoading={isLoading}>
      <>{myReviewList.length > 0 ? <Content /> : <EmptyContent />}</>
    </LoadingSpinner>
  );
};
