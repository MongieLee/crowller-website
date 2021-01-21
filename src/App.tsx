import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Spin } from "antd";
const Login = React.lazy(() => import("./Pages/Login"));
const Home = React.lazy(() => import("./Pages/Home"));

const loadingStyle = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  jusitifyContent: "center",
  alignItem: "center",
};
const App: React.FC = () => {
  return (
    <Router>
      <React.Suspense
        fallback={
          <div style={loadingStyle}>
            <Spin />
          </div>
        }
      >
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/login" exact component={Login}></Route>
        </Switch>
      </React.Suspense>
    </Router>
  );
};
export default App;
