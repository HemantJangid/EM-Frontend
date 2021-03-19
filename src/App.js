import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./screens/Home";
import Products from "./screens/Products";
import About from "./screens/About";
import Contact from "./screens/Contact";
// import Blog from "./screens/Blog";
// import Contact from "./screens/Contact";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import { AuthProvider } from "./contexts/AuthContext";
import Cart from './screens/Cart'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Cart} />
          <Route path="/products" component={Products} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
          <Route component={Error} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
