import React from "react";
import { Route, Redirect } from "react-router-dom";
import { auth } from "./../firebase";

export default function PrivateRoute({ component: Component, ...rest }) {
  // const { currentUser } = useAuth();
  //   console.log(currentUser);

  return (
    <Route
      {...rest}
      render={(props) => {
        return auth.currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect to="/signin" />
        );
      }}
    ></Route>
  );
}
