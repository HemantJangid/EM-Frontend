import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./screens/Home";
import AllProducts from "./screens/Products";
import ProductDetails from "./screens/ProductDetails";
import About from "./screens/About";
import Contact from "./screens/Contact";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import Cart from "./screens/Cart";
import TestRide from "./screens/TestRide";
import SelectAddress from "./screens/SelectAddress";
import AddAddress from "./screens/AddAddress";
import Blog from "./screens/Blog";
import Careers from "./screens/Careers";
import BlogPost from "./screens/BlogPost";
import Partner from "./screens/Partner";
import Checkout from "./screens/Checkout";
import Community from "./screens/Community";
import Emi from "./screens/Emi";
import Insurance from "./screens/Insurance";
import BuySmart from "./screens/BuySmart";
import Warranty from "./screens/Warranty";

import { AuthProvider } from "./contexts/AuthContext";

import PrivateRoute from "./components/PrivateRoute";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store/index";
import { PersistGate } from "redux-persist/integration/react";

import navUrls from "./constant/navUrls";

import ScrollToTop from "./components/ScrollToTop";
import Loader from "./components/Loader";
import newCart from "./screens/newCart";
import CartNext from "./screens/CartNext";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <AuthProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <ScrollToTop />
            <Switch>
              <Route exact path={`${navUrls.home}`} component={Home} />
              <Route exact path="/loader" component={Loader} />
              <Route path={`${navUrls.about}`} component={About} />
              <Route path={`${navUrls.newCart}`} component={newCart} />
              <Route path={`${navUrls.cartNext}`} component={CartNext} />
              <Route path={`${navUrls.partner}`} component={Partner} />
              <Route path={`${navUrls.contact}`} component={Contact} />
              <Route path={`${navUrls.careers}`} component={Careers} />
              <Route path={`${navUrls.emi}`} component={Emi} />
              <Route path={`${navUrls.insurance}`} component={Insurance} />
              <Route path={`${navUrls.buySmart}`} component={BuySmart} />
              <Route path={`${navUrls.community}`} component={Community} />
              <Route path={`${navUrls.signIn}`} component={SignIn} />
              <Route path={`${navUrls.signUp}`} component={SignUp} />
              <Route path={`${navUrls.blog}`} component={Blog} />
              <Route path={`${navUrls.blogpost}`} component={BlogPost} />
              <Route path={`${navUrls.warranty}`} component={Warranty} />
              <Route path={`${navUrls.cart}`} component={Cart} />
              <PrivateRoute
                path={`${navUrls.selectAddress}`}
                component={SelectAddress}
              />
              <PrivateRoute
                path={`${navUrls.addAddresss}`}
                component={AddAddress}
              />
              <PrivateRoute path={`${navUrls.checkout}`} component={Checkout} />
              <Route path={`${navUrls.testride}`} component={TestRide} />
              {/* <Route component={Error} /> */}
              <Route
                exact
                path={`${navUrls.products}`}
                component={AllProducts}
              />
              <Route path={`${navUrls.product}`} component={ProductDetails} />
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    </AuthProvider>
  );
}

export default App;
