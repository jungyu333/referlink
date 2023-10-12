import { Layout } from '@components/common';
import { Landing } from '@page/Landing';
import { SignIn, SignUp } from '@page/auth';
import { MyPage } from '@page/my';
import { MyDetailReputation, WriteReputationWithMenu } from '@page/reputation';
import { MyReputation } from '@page/reputation/MyReputation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/mypage/:userId" element={<MyPage />} />
          <Route path="/myreput/:userId" element={<MyDetailReputation />} />
          <Route path="/writereput" element={<WriteReputationWithMenu />} />
        </Route>

        <Route element={<Layout isHeaderMenu={false} />}>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>

        <Route path="/myreput" element={<MyReputation />} />
      </Routes>
    </BrowserRouter>
  );
};
