import React, { useEffect, useState } from "react";
import logoWhite from "../assets/img/logowhite.png";
import { Link } from "react-router-dom";
import navUrls from "./../constant/navUrls";
import constants from "../constant/RequestUrls";
import axios from "axios";
import Loader from "./Loader";

const Header = () => {
  const [products, setProducts] = useState();
  const [reRender, setReRender] = useState(true);
  const [loading, setLoading] = useState("flex");
  useEffect(() => {
    setTimeout(() => {
      setLoading("none");
    }, 2000);
  }, []);

  useEffect(() => {
    axios
      .get(`${constants.base_url}${constants.all_vehicles}`)
      .then((res) => {
        if (res.status === 200) {
          let prod = res.data.payload.products;
          // console.log(prod);
          prod.sort((a, b) =>
            a.display_position > b.display_position
              ? 1
              : b.display_position > a.display_position
              ? -1
              : 0
          );
          setProducts(prod);
          setReRender(!reRender);
        }
      })
      .catch((err) => {
        console.log(err);
        // alert(err.response.data.message);
      });
  }, []);

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg py-3 bg-black">
        <div className="container">
          <Link className="navbar-brand" to={`${navUrls.home}`}>
            <img src={logoWhite} alt="Logo" className="img-fluid" />
          </Link>
          <button
            className="navbar-toggler custom-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link mx-2" to={`${navUrls.home}`}>
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link mx-2 dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Products
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {products &&
                    products.map((product) => (
                      <Link
                        className="dropdown-item"
                        to={{
                          pathname: `/product/${product.slug}`,
                          state: { product: product },
                        }}
                      >
                        {product.name}
                      </Link>
                    ))}
                  <Link className="dropdown-item" to={`${navUrls.products}`}>
                    All Products
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2" to={`${navUrls.testride}`}>
                  Test Ride
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link mx-2 dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Assurance
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to={`${navUrls.emi}`}>
                    EMI
                  </Link>
                  <Link className="dropdown-item" to={`${navUrls.insurance}`}>
                    Insurance
                  </Link>
                  <Link className="dropdown-item" to={`${navUrls.warranty}`}>
                    Activate your Warranty
                  </Link>
                  <Link className="dropdown-item" to={`${navUrls.buySmart}`}>
                    Buy Smart
                  </Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link mx-2 dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Community
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to={`${navUrls.community}`}>
                    Community
                  </Link>
                  <Link className="dropdown-item" to={`${navUrls.blog}`}>
                    Blog
                  </Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link mx-2 dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Reach Us
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to={`${navUrls.about}`}>
                    About Us
                  </Link>
                  <Link className="dropdown-item" to={`${navUrls.partner}`}>
                    Partner With Us
                  </Link>
                  <Link className="dropdown-item" to={`${navUrls.careers}`}>
                    Careers
                  </Link>
                  <Link className="dropdown-item" to={`${navUrls.contact}`}>
                    Contact Us
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Loader display={loading} />
    </div>
  );
};

export default Header;
