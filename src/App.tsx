import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
const Login = React.lazy(() => import("./Pages/Login"));
const Home = React.lazy(() => import("./Pages/Home"));
const App: React.FC = () => {
  return (
    <Router>
      <React.Suspense fallback={<div>loading...</div>}>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/login" exact component={Login}></Route>
        </Switch>
      </React.Suspense>
    </Router>
  );
};
export default App;
