import React, { useEffect, useState } from "react";
import logoWhite from "../assets/img/logowhite.png";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import navUrls from "./../constant/navUrls";
import constants from "../constant/RequestUrls";
import axios from "axios";

const Header = () => {
  const [products, setProducts] = useState();
  const [reRender, setReRender] = useState(true);

  useEffect(() => {
    axios
      .get(`${constants.base_url}${constants.all_vehicles}`)
      .then((res) => {
        if (res.status === 200) {
          setProducts(res.data.payload.products);
          setReRender(!reRender);
        }
      })
      .catch((err) => {
        console.log(err);
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
                          pathname: `/${product.slug}`,
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
                <Link className="nav-link mx-2" to={`${navUrls.about}`}>
                  About Us
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Assurance
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item">EMI</Link>
                  <Link className="dropdown-item">Insurance Calc</Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Reach Us
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to={`${navUrls.contact}`}>
                    Contact Us
                  </Link>
                  <Link className="dropdown-item" to={`${navUrls.partner}`}>
                    Partner With Us
                  </Link>
                  <Link className="dropdown-item">Careers</Link>
                  <Link className="dropdown-item" to={`${navUrls.testride}`}>
                    Book A Test Ride
                  </Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Community
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item">Community</Link>
                  <Link className="dropdown-item" to={`${navUrls.blog}`}>
                    Blog
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
