import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import "../assets/css/Product.css";
import dots from "../assets/img/design/dots.svg";
import neco from "../assets/img/design/neco.svg";
import tyres from "../assets/img/design/tyres.svg";
import light from "../assets/img/design/light.svg";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import constants from "../constant/RequestUrls";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "./../redux/actions/cart";
import { auth } from "./../firebase";

function ProductDetails(props) {
  const [productContent, setProductContent] = useState();
  const history = useHistory();
  const [reRender, setReRender] = useState(true);
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cartReducer);
  console.log(items);

  useEffect(() => {
    console.log("use effect is running");
    axios
      .get(
        `${constants.base_url}${constants.product}/${props.match.params.productSlug}/detail`
      )
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setProductContent(res.data.payload);
          setLoading(false);
          setReRender(!reRender);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(productContent);
  return (
    <div>
      <Header />

      {productContent != undefined && productContent != null && (
        <>
          <section id="product-hero">
            <div className="container">
              <h1>{productContent.landing_page_content}</h1>
              <div className="buttons">
                <div className="mx-3">
                  <button
                    style={{ backgroundColor: "transparent", border: "none" }}
                    onClick={() => history.push("/testride")}
                  >
                    <Button text="Book a test ride" />
                  </button>
                </div>
                <div className="mx-3">
                  <button
                    style={{ backgroundColor: "transparent", border: "none" }}
                    onClick={() => {
                      auth.currentUser
                        ? auth.currentUser.getIdToken(true).then((idToken) => {
                            const headers = {
                              "Content-Type": "application/json",
                              Authorization: idToken,
                            };
                            props.location.state &&
                              axios
                                .post(
                                  `${constants.base_url}${constants.cart}/${props.location.state.product.uuid}`,
                                  { quantity: 1 },
                                  { headers }
                                )
                                .then((res) => history.push("/cart"))
                                .catch((err) => console.log(err));
                          })
                        : history.push("/cart");
                    }}
                  >
                    <Button text="Add to cart" />
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section id="img-banner"></section>

          <section id="product-info">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-5">
                  <h2>{productContent.stats_page_heading}</h2>
                  <p>{productContent.stats_page_content}</p>
                  <table>
                    {Object.keys(productContent.stats_page_metrics).map(
                      (key, index) => (
                        <tr key={index}>
                          <td className="pri">{key}</td>
                          <td>{productContent.stats_page_metrics[key]}</td>
                        </tr>
                      )
                    )}
                  </table>
                </div>
                <div className="col-lg-7">
                  <div className="content-2">
                    <h4>Shimano tourney dual derailleurs</h4>
                    <h1>
                      {
                        productContent.stats_page_metrics["derailleur"].split(
                          "-"
                        )[0]
                      }
                    </h1>
                    <p>Speed</p>
                    <Button text="Download brochure" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="buy">
            <div className="container">
              <div className="row-justify-content-center"></div>
            </div>
          </section>

          <section id="done">
            <div className="container">
              <h2>We are not done yet</h2>
              <img src={dots} alt="Dots" className="dots" />
              <div className="mt-5 row justify-content-center">
                <div className="col-lg-4">
                  <div className="done-box">
                    <img src={neco} alt="Neco" className="img-fluid" />
                    <h4>Neco with Sealed Bearing and Black Alloy</h4>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="done-box">
                    <img src={tyres} alt="Neco" className="img-fluid" />
                    <h4>
                      <span className="pri">26 inch</span> diameter and{" "}
                      <span className="pri">2 inch</span> wide heavy duty Tyres
                    </h4>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="done-box">
                    <img src={light} alt="Neco" className="img-fluid" />
                    <h4>
                      Front Mount <span className="pri">LED</span> Headlight
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      <Footer />
    </div>
  );
}

export default ProductDetails;
