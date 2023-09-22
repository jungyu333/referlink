import { withMenuLayout } from '@hoc/withMenuLayout';

const WriteReputation = () => {
  return <>create</>;
};

export const WriteReputationWithMenu =
  withMenuLayout('평판 작성')(WriteReputation);
