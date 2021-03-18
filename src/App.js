import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./screens/Home"
import Products from "./screens/Products"
import About from "./screens/About"
import Contact from "./screens/Contact";
// import Blog from "./screens/Blog";
// import Contact from "./screens/Contact";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
