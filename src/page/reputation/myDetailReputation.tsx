import { withMenuLayout } from '@hoc/withMenuLayout';

const myDetailReputation = () => {
  return <>my detail reputation</>;
};

export const MyDetailReputationWithMenu = withMenuLayout(
  '평판상세',
  '평판 작성자 이름',
)(myDetailReputation);
