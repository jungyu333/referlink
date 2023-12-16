import { getMyReviewList } from '@api/reputation';
import { Content, EmptyContent } from '@components/reput';
import { useCustomQuery } from '@hooks/useCustomQuery';
import { LoadingSpinner } from 'referlink-ui';

export const MyReputation = () => {
  const {
    data: myReviewList,
    isLoading,
    error,
  } = useCustomQuery(['myreview'], getMyReviewList, {
    refetchOnWindowFocus: false,
  });

  return (
    <LoadingSpinner isLoading={isLoading}>
      <>
        {!isLoading && myReviewList && (
          <>{myReviewList.data.length > 0 ? <Content /> : <EmptyContent />}</>
        )}
      </>
    </LoadingSpinner>
  );
};
