import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./screens/Home";
import AllProducts from "./screens/Products";
import ProductDetails from "./screens/ProductDetails";
import About from "./screens/About";
import Contact from "./screens/Contact";
// import Blog from "./screens/Blog";
// import Contact from "./screens/Contact";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import { AuthProvider } from "./contexts/AuthContext";
import Cart from "./screens/Cart";
import TestRide from "./screens/TestRide";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/cart" component={Cart} />
          <Route path="/testride" component={TestRide} />
          {/* <Route component={Error} /> */}
          <Route path="/products" component={AllProducts} />
          <Route path="/:productSlug" component={ProductDetails} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
