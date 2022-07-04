import React, { useState } from "react";
let Contact = () => {
  let [data, setData] = useState({
    email: "",
    pass: "",
    address: "",
    address2: "",
    city: "",
    state: "",
    phone: "",
  });
  let handelData = (e) => {
    setData({ [e.target.name]: e.target.value });
    // console.log(e.target.value);
    // console.log(e.target.name);
  };
  let handelSubmit = (e) => {
    console.log(e.target[0].value);

    e.preventDefault();
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-d-12">
            <form className="row g-3 mt-5" onSubmit={handelSubmit}>
              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  name="email"
                  value={data.email}
                  onChange={handelData}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                  name="pass"
                  value={data.pass}
                  onChange={handelData}
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="1234 Main St"
                  name="address"
                  value={data.address}
                  onChange={handelData}
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress2" className="form-label">
                  Address 2
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress2"
                  placeholder="Apartment, studio, or floor"
                  name="address2"
                  value={data.address2}
                  onChange={handelData}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputCity" className="form-label">
                  City
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCity"
                  name="city"
                  value={data.city}
                  onChange={handelData}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="inputState" className="form-label">
                  State
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputState"
                  name="state"
                  value={data.state}
                  onChange={handelData}
                />
              </div>
              <div className="col-md-2">
                <label htmlFor="inputPhone" className="form-label">
                  Phone
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputPhone"
                  name="phone"
                  value={data.phone}
                  onChange={handelData}
                />
              </div>

              <div className="col-12">
                <input type="submit" value="submit" className="btn_about" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
