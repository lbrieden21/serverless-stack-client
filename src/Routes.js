import React from "react";
import { Route, Switch } from "react-router-dom";
import AppliedRoute from "./components/AppliedRoute";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import Loadable from 'react-loadable';

const MyLoadingComponent = ({isLoading, error}) => {
  // Handle the loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }
  // Handle the error state
  else if (error) {
    return <div>Sorry, there was a problem loading the page.</div>;
  }
  else {
    return null;
  }
};

const AsyncHome = Loadable({
  loader: () => import("./containers/Home"),
  loading: MyLoadingComponent
});
const AsyncLogin = Loadable({
  loader: () => import("./containers/Login"),
  loading: MyLoadingComponent
});
const AsyncNotes = Loadable({
  loader: () => import("./containers/Notes"),
  loading: MyLoadingComponent
});
const AsyncSignup = Loadable({
  loader: () => import("./containers/Signup"),
  loading: MyLoadingComponent
});
const AsyncNewNote = Loadable({
  loader: () => import("./containers/NewNote"),
  loading: MyLoadingComponent
});
const AsyncNotFound = Loadable({
  loader: () => import("./containers/NotFound"),
  loading: MyLoadingComponent
});
const AsyncSettings = Loadable({
  loader: () => import("./containers/Settings"),
  loading: MyLoadingComponent
});

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute
      path="/"
      exact
      component={AsyncHome}
      props={childProps}
    />
    <UnauthenticatedRoute
      path="/login"
      exact
      component={AsyncLogin}
      props={childProps}
    />
    <UnauthenticatedRoute
      path="/signup"
      exact
      component={AsyncSignup}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/notes/new"
      exact
      component={AsyncNewNote}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/notes/:id"
      exact
      component={AsyncNotes}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/settings"
      exact
      component={AsyncSettings}
      props={childProps}
    />
    {/* Finally, catch all unmatched routes */}
    <Route component={AsyncNotFound} />
  </Switch>
;
