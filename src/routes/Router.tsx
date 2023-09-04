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
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path="/mypage/:userId" element={<MyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
