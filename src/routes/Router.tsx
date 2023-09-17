import { Layout } from '@components/common';
import { Landing } from '@page/Landing';
import { SignIn, SignUp } from '@page/auth';
import { MyPage } from '@page/my';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Landing />} />
        </Route>

        <Route element={<Layout isMenu={true} mainText="마이페이지" />}>
          <Route path="/mypage/:userId" element={<MyPage />} />
        </Route>

        <Route element={<Layout isFooter={false} />}>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
