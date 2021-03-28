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
import Vimeo from "@u-wave/react-vimeo";
import { addItem } from "./../redux/actions/cart";
import { auth } from "./../firebase";
import navUrls from "./../constant/navUrls";
import { Helmet } from "react-helmet";

function ProductDetails(props) {
  const [productContent, setProductContent] = useState();
  const productDetails = props.location.state.product;
  const history = useHistory();
  const [reRender, setReRender] = useState(true);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cartReducer);

  useEffect(() => {
    axios
      .get(
        `${constants.base_url}${constants.product}/${props.match.params.productSlug}/detail`
      )
      .then((res) => {
        // console.log(res);
        if (res.status === 200) {
          setProductContent(res.data.payload);
          setLoading(false);
          setReRender(!reRender);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [productDetails]);

  return (
    <div>
      <Header />

      {productContent != undefined && productContent != null && (
        <>
          <Helmet>
            <meta charSet="utf-8" />
            <title>
              {productContent.landing_page_content} | EMotorad | Best Electric
              Bicycle and Electric Bike
            </title>
            <meta
              name="description"
              content="Experience the Best In Class Ebike Now in India"
            />
          </Helmet>

          <section id="product-hero">
            <div className="container">
              <h1>{productContent.landing_page_content}</h1>
              <div className="d-inline-flex flex-wrap">
                <div className="mx-3 my-2">
                  <button
                    style={{ backgroundColor: "transparent", border: "none" }}
                    onClick={() => history.push(navUrls.testride)}
                  >
                    <Button text="Book a test ride" />
                  </button>
                </div>
                <div className="mx-3 my-2">
                  <button
                    className="bg-transparent border-0"
                    onClick={() => {
                      auth.currentUser
                        ? auth.currentUser.getIdToken(true).then((idToken) => {
                            console.log(idToken);
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
                                .then((res) => history.push(navUrls.cart))
                                .catch((err) => console.log(err));
                          })
                        : history.push(navUrls.cart);
                    }}
                  >
                    <Button text="Add to cart" />
                  </button>
                </div>
              </div>
            </div>
          </section>
          {console.log(productContent)}
          <section id="video">
            <section id="video">
              <Vimeo
                video={productContent.video_page_video_link}
                autoplay={true}
                responsive={true}
                controls={false}
                showByline={false}
                color="#68db85"
                background={true}
              />
            </section>
          </section>

          <section
            id="product-text"
            style={{ background: `${productContent.primary_color}` }}
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-7 col-md-8 text-center">
                  <p>{productContent.info_page_content_1}</p>
                  <h2>{productDetails.name} will take you anywhere.</h2>
                  <p>{productContent.info_page_content_2}</p>
                  <h1 className="mt-5">
                    From the maker's of {productDetails.name}
                  </h1>
                  <p>{productContent.stats_page_content}</p>
                  <Button text="Watch Demo Video" color="black" />
                </div>
              </div>
            </div>
          </section>

          <section
            id="product-numbers"
            style={{
              backgroundImage: `url(${productContent.info_4_bg_image_1})`,
            }}
          >
            <div className="numbers">
              <div className="container">
                <div className="row justify-content-center">
                  {productContent.features_page_metrics_1.map(
                    (feature, index) => {
                      let metrics = feature.split("-");
                      return (
                        <div className="col-lg-4 col-md-4 text-center">
                          <div className="mx-1">
                            <h4>{metrics[0]}</h4>
                            <h1>
                              {metrics[1]}
                              {index === 1 && "+"}
                            </h1>
                            <p>{metrics[2]}</p>
                          </div>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
              <div className="mx-auto mt-5">
                <Button text="Download Brochure" />
              </div>
            </div>
          </section>

          <section id="product-info">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-5 my-5">
                  <h2>{productContent.stats_page_heading}</h2>
                  <p>{productContent.stats_page_content}</p>
                  <table>
                    {productContent.stats_page_metrics != undefined &&
                      productContent.stats_page_metrics != null &&
                      Object.keys(productContent.stats_page_metrics).map(
                        (key, index) => (
                          <tr key={index}>
                            <td className="pri">{key}</td>
                            <td>{productContent.stats_page_metrics[key]}</td>
                          </tr>
                        )
                      )}
                  </table>
                </div>
                <div className="col-lg-7 my-5">
                  <div className="content-2">
                    <h4>Shimano tourney dual derailleurs</h4>
                    <h1>
                      {productContent.stats_page_metrics != undefined &&
                        productContent.stats_page_metrics != null &&
                        productContent.stats_page_metrics["derailleur"].split(
                          "-"
                        )[0]}
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
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-8">
                  <div className="buy-box py-3">
                    <div className="container text-center">
                      <div className="bg-white my-2 mb-5 py-3">
                        <h4 className="text-dark font-weight-bold">
                          INR {productDetails.selling_price}
                        </h4>
                        <hr />
                        <h2 className="text-dark">
                          *EMI INR {productDetails.emi_per_month}/month
                        </h2>
                      </div>
                      <div className="px-3">
                        <table>
                          {Object.keys(productContent.stats_page_metrics).map(
                            (key, index) => (
                              <tr key={index}>
                                <td className="font-weight-bold text-capitalize">
                                  {key}
                                </td>
                                <td>
                                  {productContent.stats_page_metrics[key]}
                                </td>
                              </tr>
                            )
                          )}
                        </table>
                      </div>
                    </div>
                    <hr />
                  </div>
                </div>
              </div>
              <div className="d-flex flex-wrap mt-5 justify-content-center">
                <div className="my-3 mx-3">
                  <Button text="Buy Now" />
                </div>
                <div className="my-3 mx-3">
                  <Button text="Book a test ride" />
                </div>
              </div>
            </div>
          </section>

          <section id="done">
            <div className="container">
              <h2>We are not done yet</h2>
              <img src={dots} alt="Dots" className="dots" />
              <div className="mt-5 row justify-content-center">
                <div className="col-lg-4 col-md-4 col-sm-6 my-3">
                  <div className="done-box">
                    <img src={neco} alt="Neco" className="img-fluid" />
                    <h4>Neco with Sealed Bearing and Black Alloy</h4>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 my-3">
                  <div className="done-box">
                    <img src={tyres} alt="Neco" className="img-fluid" />
                    <h4>
                      <span className="pri">26 inch</span> diameter and
                      <span className="pri"> 2 inch</span> wide heavy duty Tyres
                    </h4>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 my-3">
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
