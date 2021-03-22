import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./screens/Home";
import AllProducts from "./screens/Products";
import ProductDetails from "./screens/ProductDetails";
import About from "./screens/About";
import Contact from "./screens/Contact";
// import Contact from "./screens/Contact";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import { AuthProvider } from "./contexts/AuthContext";
import Cart from "./screens/Cart";
import TestRide from "./screens/TestRide";
import PrivateRoute from "./components/PrivateRoute";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store/index";
import { PersistGate } from "redux-persist/integration/react";
import SelectAddress from "./screens/SelectAddress";
import AddAddress from "./screens/AddAddress";
import Blog from "./screens/Blog";
import Careers from "./screens/Careers";

function App() {
  return (
    <AuthProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/signin" component={SignIn} />
              <Route path="/signup" component={SignUp} />
              <Route path="/blog" component={Blog} />
              {/* <Route path="/pd" component={ProductDetails} /> */}
              <PrivateRoute path="/cart" component={Cart} />
              <PrivateRoute path="/select-address" component={SelectAddress} />
              <PrivateRoute path="/add-address" component={AddAddress} />
              <Route path="/testride" component={TestRide} />
              {/* <Route component={Error} /> */}
              <Route path="/products" component={AllProducts} />
              <Route path="/:productSlug" component={ProductDetails} />
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    </AuthProvider>
  );
}

export default App;
