import { Menu } from '@components/common';

export const withMenuLayout =
  <P extends object>(mainText: string, subText?: string) =>
  (Component: React.ComponentType<P>) =>
  (props: P) =>
    (
      <>
        <Menu mainText={mainText} subText={subText} />
        <Component {...props} />
      </>
    );
