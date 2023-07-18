import { Route, Routes } from 'react-router';

import { Home } from './Pages/Home';

export const App = () => (
  <Routes>
    <Route path='/' Component={ Home } />
  </Routes>
);
