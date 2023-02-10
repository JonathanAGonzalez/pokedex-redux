import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';

const routesPath = [
  {
    path: '/',
    Component: Home,
    exact: true,
  },
];

export const RoutingSystem = () => {
  return (
    <Router>
      <Routes>
        {routesPath.map(({ path, exact, Component }) => (
          <Route path={path} element={<Component />} />
        ))}
      </Routes>
    </Router>
  );
};
