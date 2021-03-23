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
import navUrls from "./constant/navUrls";
import { addItem } from "./redux/actions/cart";
import BlogPost from "./screens/BlogPost";

function App() {
  return (
    <AuthProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Switch>
              <Route exact path={`${navUrls.home}`} component={Home} />
              <Route path={`${navUrls.about}`} component={About} />
              <Route path={`${navUrls.contact}`} component={Contact} />
              <Route path={`${navUrls.signIn}`} component={SignIn} />
              <Route path={`${navUrls.signUp}`} component={SignUp} />
              <Route path={`${navUrls.blog}`} component={Blog} />
              <Route path={`${navUrls.blogpost}`} component={BlogPost} />
              {/* <Route path={`${navUrls.home}`}component={ProductDetails} /> */}
              <PrivateRoute path={`${navUrls.cart}`} component={Cart} />
              <PrivateRoute
                path={`${navUrls.selectAddress}`}
                component={SelectAddress}
              />
              <PrivateRoute
                path={`${navUrls.addAddresss}`}
                component={AddAddress}
              />
              <Route path={`${navUrls.testride}`} component={TestRide} />
              {/* <Route component={Error} /> */}
              <Route path={`${navUrls.products}`} component={AllProducts} />
              <Route path={`${navUrls.product}`} component={ProductDetails} />
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    </AuthProvider>
  );
}

export default App;
