import React from "react";
import { Route } from "react-router-dom";
import Account from "./pages/Account";
import Home from "./pages/Home";
import Badges from "./pages/Badges";

// All the routes in the application are defined here
// define routes like this or set of components and load this component in the App.tsx??

const Routes: React.FC = () => {
  return (
    <>
      <Route key="/" exact path="/" component={Home} />{" "}
      {/* this should be Home.tsx */}
      <Route key="/account" path="/account" component={Account} />
      <Route key="/badges" path="/badges" component={Badges} />
    </>
  );
};

export default Routes;
