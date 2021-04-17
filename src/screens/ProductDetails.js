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
import { Link, useHistory, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Vimeo from "@u-wave/react-vimeo";
import { addItem } from "./../redux/actions/cart";
import { auth } from "./../firebase";
import navUrls from "./../constant/navUrls";
import { Helmet } from "react-helmet";
import Modal from "react-modal";
import Loader from "../components/Loader";
import { Waypoint } from "react-waypoint";

function ProductDetails(props) {
  const [productContent, setProductContent] = useState();
  const history = useHistory();
  const [reRender, setReRender] = useState(true);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cartReducer);

  console.log("slug: ", props.match.params.productSlug);

  useEffect(() => {
    console.log("use effect is running");
    axios
      .get(
        `${constants.base_url}${constants.product}/${props.match.params.productSlug}/detail`
      )
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data.payload);
          setProductContent(res.data.payload);
          setLoading(false);
          setReRender(!reRender);
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data.message);
      });
  }, [props.match.params.productSlug]);

  const customStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.9)",
    },
    content: {
      top: "50%",
      left: "50%",
      padding: "0px",
      margin: "0px",
      width: "80%",
      height: "fit-content",
      transform: "translate(-50%, -50%)",
    },
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
    console.log("Before");
    getVideoPlayer().play();
    console.log("after");
  }

  function closeModal() {
    setIsOpen(false);
    getVideoPlayer().pause();
  }

  const getVideoPlayer = () => {
    let playerWindow = new window.Vimeo.Player(
      document.querySelector("#video-product")
    );
    return playerWindow;
  };

  let [shouldPlay, updatePlayState] = useState();

  let handleEnterViewport = function () {
    getVideoPlayer2().play();
  };
  let handleExitViewport = function () {
    getVideoPlayer2().pause();
  };

  const getVideoPlayer2 = () => {
    let playerWindow2 = new window.Vimeo.Player(
      document.querySelector("#video")
    );
    console.log(playerWindow2);
    return playerWindow2;
  };

  return (
    <div>
      <Header />

      {loading ? (
        <Loader />
      ) : (
        productContent != undefined &&
        productContent != null && (
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
              <script src="https://player.vimeo.com/api/player.js"></script>
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
                        // auth.currentUser
                        //   ? auth.currentUser
                        //       .getIdToken(true)
                        //       .then((idToken) => {
                        //         // console.log(idToken);
                        //         const headers = {
                        //           "Content-Type": "application/json",
                        //           Authorization: idToken,
                        //         };
                        //         props.location.state &&
                        //           axios
                        //             .post(
                        //               `${constants.base_url}${constants.cart}/${props.location.state.product.uuid}`,
                        //               { quantity: 1 },
                        //               { headers }
                        //             )
                        //             .then((res) => {
                        //               console.log(res);
                        //               history.push(navUrls.cart);
                        //             })
                        //             .catch((err) => {
                        //               console.log(err.response);
                        //               alert(err.response.data.message);
                        //             });
                        //       })
                        //   : history.push(navUrls.cart);
                        let alreadyInCart = false;
                        for (let i = 0; i < items.length; i++) {
                          if (
                            items[i].product.uuid ===
                            productContent.product.uuid
                          ) {
                            alreadyInCart = true;
                            items[i].quantity += 1;
                            dispatch(addItem([...items]));
                          }
                        }

                        if (!alreadyInCart) {
                          dispatch(
                            addItem([
                              ...items,
                              {
                                quantity: 1,
                                product: productContent.product,
                              },
                            ])
                          );
                        }
                        history.push(navUrls.cart);
                      }}
                    >
                      <Button text="Buy Now" />
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* <Waypoint
              onEnter={handleEnterViewport}
              onLeave={handleExitViewport}
            >
              <section id="video" className="video-container">
                <iframe
                  src={`${productContent.video_page_video_link}`}
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                ></iframe>
              </section>
            </Waypoint> */}

            <Vimeo
              video={productContent.video_page_video_link}
              autoplay={true}
              responsive={true}
              controls={false}
              showByline={false}
              color="#68db85"
              background={true}
            />

            <section
              id="product-text"
              style={{ background: `${productContent.primary_color}` }}
            >
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-7 col-md-8 text-center">
                    <p>{productContent.info_page_content_1}</p>
                    <h2>
                      {productContent.landing_page_content} will take you
                      anywhere.
                    </h2>
                    <p>{productContent.info_page_content_2}</p>
                    <h1 className="mt-5">
                      From the maker's of {productContent.landing_page_content}
                    </h1>
                    <p>{productContent.stats_page_content}</p>
                    <button
                      onClick={openModal}
                      className="bg-transparent border-0"
                    >
                      <Button text="Watch Demo Video" color="black" />
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
            >
              <section
                id="video-product"
                className="video-container"
                style={{ position: "relative" }}
              >
                {/* <iframe
                src="https://player.vimeo.com/video/509675910"
                style={{
                  height: "100%",
                  width: "100%",
                }}
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
              ></iframe> */}
                <div
                  onClick={closeModal}
                  className="close-btn d-flex align-items-center justify-content-center"
                >
                  <i class="fas fa-times"></i>
                </div>
                <Vimeo
                  style={{ zIndex: "900" }}
                  video={productContent.info_page_bg_image_url}
                  autoplay={true}
                  responsive={true}
                  controls={false}
                  showByline={false}
                  color="#68db85"
                  background={true}
                />
              </section>
            </Modal>

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
                  <a
                    target="_blank"
                    href={`${productContent.features_page_heading_2}`}
                  >
                    <Button text="Download Brochure" />
                  </a>
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
                      <a
                        target="_blank"
                        href={`${productContent.features_page_heading_2}`}
                      >
                        <Button text="Download Brochure" />
                      </a>
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
                            INR {productContent.pricing_page_amount}
                          </h4>
                          <hr />
                          <h2 className="text-dark">
                            *EMI INR {productContent.pricing_page_emi}/month
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
                    <button
                      className="bg-transparent border-0"
                      onClick={() => {
                        let alreadyInCart = false;
                        for (let i = 0; i < items.length; i++) {
                          if (
                            items[i].product.uuid ===
                            productContent.product.uuid
                          ) {
                            alreadyInCart = true;
                            items[i].quantity += 1;
                            dispatch(addItem([...items]));
                          }
                        }

                        if (!alreadyInCart) {
                          dispatch(
                            addItem([
                              ...items,
                              {
                                quantity: 1,
                                product: productContent.product,
                              },
                            ])
                          );
                        }
                        history.push(navUrls.cart);
                      }}
                    >
                      <Button text="Buy Now" />
                    </button>
                  </div>
                  <div className="my-3 mx-3">
                    <button
                      style={{ backgroundColor: "transparent", border: "none" }}
                      onClick={() => history.push(navUrls.testride)}
                    >
                      <Button text="Book a test ride" />
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <section id="done">
              <div className="container">
                <h2>We are not done yet</h2>
                <img src={dots} alt="Dots" className="dots" />
                <div className="my-5 row justify-content-center">
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
                        <span className="pri"> 2 inch</span> wide heavy duty
                        Tyres
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
                <div className="d-flex justify-content-center">
                  <button
                    style={{ backgroundColor: "transparent", border: "none" }}
                    onClick={() => history.push(navUrls.testride)}
                  >
                    <Button text="Book a test ride" color="black" />
                  </button>
                </div>
              </div>
            </section>
          </>
        )
      )}

      <Footer />
    </div>
  );
}

export default ProductDetails;
