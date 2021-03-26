import React, { useState, useEffect } from "react";

import "../assets/css/Sign.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./../firebase";
import constants from "../constant/RequestUrls";
import axios from "axios";
import navUrls from "./../constant/navUrls";

function SelectAddress() {
  const [reRender, setReRender] = useState(true);
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState();
  const history = useHistory();

  useEffect(() => {
    getAddress();
  }, []);

  function getAddress() {
    auth.currentUser.getIdToken(true).then((idToken) => {
      const headers = {
        "Content-Type": "application/json",
        Authorization: idToken,
      };
      axios
        .get(`${constants.base_url}${constants.address}`, { headers })
        .then((res) => {
          // console.log(res);
          if (res.status === 200) {
            setAddresses(res.data.payload.address_list);
            setReRender(!reRender);
          }
        })
        .catch((err) => console.log(err));
    });
  }

  function submitAddress() {
    // alert(JSON.stringify({ user_address_uuid: selectedAddress }, null, 2));
    auth.currentUser.getIdToken(true).then((idToken) => {
      const headers = {
        "Content-Type": "application/json",
        Authorization: idToken,
      };
      axios
        .post(
          `${constants.base_url}${constants.order}`,
          { user_address_uuid: selectedAddress },
          { headers }
        )
        .then((res) => {
          // console.log(res);
          if (res.status === 200) {
            // history.push(navUrls.home);
            history.push(navUrls.checkout, { order: res.data.payload });
          }
        })
        .catch((err) => console.log(err));
    });
  }

  return (
    <div>
      <section id="sign">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="form-box">
                {/* <form> */}
                <div className="px-3 py-3">
                  <h2 className="mb-4">
                    Select <span className="pri">Address</span>
                  </h2>

                  <div className="form-group">
                    {addresses.map((address, index) => (
                      <div class="custom-control custom-radio">
                        <input
                          type="radio"
                          id={`addressRadio${index}`}
                          name="user_address_uuid"
                          class="custom-control-input"
                          onClick={() => setSelectedAddress(address.uuid)}
                          value={address.uuid}
                        />
                        <label
                          class="custom-control-label"
                          for={`addressRadio${index}`}
                        >
                          {`${address.address_line_1}, ${address.address_line_2}, ${address.landmark}, ${address.city}, ${address.state}, ${address.pincode}`}
                        </label>
                      </div>
                    ))}
                  </div>
                  <div className="form-group">
                    <Link to={`${navUrls.addAddresss}`}>
                      <input
                        // disabled={loading}
                        className="form-control add-new-address text-center"
                        defaultValue="Add New Address"
                        name="submit"
                      />
                    </Link>
                  </div>
                  <div className="form-group">
                    <button
                      className="form-control add-new-address text-center"
                      onClick={() => submitAddress()}
                    >
                      Continue
                    </button>
                  </div>
                </div>
                {/* </form> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SelectAddress;
