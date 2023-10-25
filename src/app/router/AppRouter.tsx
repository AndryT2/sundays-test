import { type FC, Suspense, lazy } from 'react';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';

import { SUNDAYS } from '~/shared/routes';

const SundaysPage = lazy(() => import('~/pages/sundays'));

const AppRouter: FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          <Route path={SUNDAYS} element={<SundaysPage />} />
          <Route path="*" element={<Navigate to={SUNDAYS} replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
