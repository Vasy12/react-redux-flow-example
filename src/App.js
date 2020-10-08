import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
const Todo = lazy(() => import('./pages/Todo'));
const Home = lazy(() => import('./pages/Home'));

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/todo">Todo</NavLink>
          </li>
        </ul>
      </nav>
      <hr />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/todo" component={Todo} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
