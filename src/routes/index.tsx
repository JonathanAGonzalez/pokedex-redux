import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';

const routesPath = [
  {
    path: '/',
    Component: Home,
    exact: true,
    id: 1,
  },
];

export const RoutingSystem = () => {
  return (
    <Router>
      <Routes>
        {routesPath.map(({ path, exact, id, Component }) => (
          <Route path={path} element={<Component />} key={id} />
        ))}
      </Routes>
    </Router>
  );
};
