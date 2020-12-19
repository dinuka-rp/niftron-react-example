import React from "react";
import { Route } from "react-router-dom";
import Badges from "./pages/Badges";
import Home from "./pages/Home";

// All the routes in the application are defined here
// define routes like this or set of components and load this component in the App.tsx??

const Routes: React.FC = () => {
    return (
      <>
        <Route key="/" exact path="/" component={Home} />    {/* this should be Home.tsx */}
        <Route key="/badges" path="/badges" component={Badges} />
      </>
    );
  };
  
  export default Routes;