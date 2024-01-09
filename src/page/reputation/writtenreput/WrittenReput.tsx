import { LoadingSpinner } from 'referlink-ui';
import { useCustomQuery } from '@hooks/useCustomQuery';
import { getWrittenReviewList } from '@api/reputation';
import { EmptyContent, WrittenContent } from '@components/reput';

export const WrittenReput = () => {
  const {
    data: writtenReviewList,
    isLoading,
    error,
  } = useCustomQuery(['writtenReview'], getWrittenReviewList, {
    refetchOnWindowFocus: false,
  });

  return (
    <LoadingSpinner isLoading={isLoading}>
      <>
        {!isLoading && writtenReviewList && (
          <>
            {writtenReviewList.data.length > 0 ? (
              <WrittenContent reviews={writtenReviewList.data} />
            ) : (
              <EmptyContent />
            )}
          </>
        )}
      </>
    </LoadingSpinner>
  );
};
