import React, { Fragment, lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import Layout from 'Layout';

const RequireAuth = lazy(() => import('Routes/RequireAuth'));
const Dashboard = lazy(() => import('Containers/Dashboard'));
const Login = lazy(() => import('Containers/Login/index'));
const Page404 = lazy(() => import('Containers/Page404'));

const Core = () => {
  return (
    <Fragment>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Suspense fallback={'loading route /'}><RequireAuth><p>home</p></RequireAuth></Suspense>}/>
          <Route path="/dashboard">
            <Route index={true} element={<Suspense fallback={'loading route dashboard'}><RequireAuth><Dashboard /></RequireAuth></Suspense>} />
            <Route path="child" element={<Suspense fallback={'loading route dashboard/child'}><RequireAuth><p>dashboard child</p></RequireAuth></Suspense>} />
          </Route>
          <Route path="/login" element={<Suspense fallback={'loading route login'}><Login /></Suspense>} />
          <Route path="*" element={<RequireAuth><React.Suspense fallback={'loading route Page404'}><Page404 /></React.Suspense></RequireAuth>} />
        </Route>
      </Routes>
    </Fragment>
  )
};

export default Core;