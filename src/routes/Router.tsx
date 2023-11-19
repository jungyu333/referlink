import { Layout } from '@components/common';
import { ServiceStart, SignIn, SignUp } from '@page/auth';
import { Landing } from '@page/landing';
import { MyPage } from '@page/my';
import { MyDetailReputation, WriteReputationWithMenu } from '@page/reputation';
import { MyReputation } from '@page/reputation/MyReputation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProtectRouter } from 'routes/ProtectRouter';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<ProtectRouter layout={Layout} component={Landing} />}
        />
        <Route
          path="/mypage/:userId"
          element={
            <ProtectRouter layout={Layout} component={MyPage} requiresAuth />
          }
        />
        <Route
          path="/myreput/:userId"
          element={
            <ProtectRouter
              layout={Layout}
              component={MyDetailReputation}
              requiresAuth
            />
          }
        />
        <Route
          path="/writereput"
          element={
            <ProtectRouter
              layout={Layout}
              component={WriteReputationWithMenu}
              requiresAuth
            />
          }
        />
        <Route
          path="/myreput"
          element={
            <ProtectRouter
              layout={Layout}
              component={MyReputation}
              requiresAuth
            />
          }
        />

        <Route
          path="/signin"
          element={
            <ProtectRouter
              layout={Layout}
              component={SignIn}
              isHeaderMenu={false}
              isAuth
            />
          }
        />
        <Route
          path="/signup"
          element={
            <ProtectRouter
              layout={Layout}
              component={SignUp}
              isHeaderMenu={false}
              isAuth
            />
          }
        />
        <Route
          path="/service-start"
          element={
            <ProtectRouter
              layout={Layout}
              component={ServiceStart}
              isHeaderMenu={false}
              isAuth
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
