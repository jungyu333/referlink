import { Layout } from '@components/common';
import { Agree, ServiceStart, SignIn, SignUp } from '@page/auth';
import { Landing } from '@page/landing';
import { MyPage } from '@page/my';
import { MyDetailReputation, WrittenReput } from '@page/reputation';
import { MyReputation } from '@page/reputation/myreput/MyReputation';
import { WriteRiview } from '@page/review';
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
          path="/my"
          element={
            <ProtectRouter layout={Layout} component={MyPage} requiresAuth />
          }
        />
        <Route
          path="/myreput/:reviewId"
          element={
            <ProtectRouter
              layout={Layout}
              component={MyDetailReputation}
              requiresAuth
            />
          }
        />
        <Route
          path="/write/review"
          element={
            <ProtectRouter
              layout={Layout}
              component={WriteRiview}
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
          path="/writtenreput"
          element={
            <ProtectRouter
              layout={Layout}
              component={WrittenReput}
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
        <Route
          path="/agree"
          element={
            <ProtectRouter
              layout={Layout}
              component={Agree}
              isHeaderMenu={false}
              isAuth
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
