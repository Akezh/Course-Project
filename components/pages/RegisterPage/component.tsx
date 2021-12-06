import React, { FC } from "react";
import Link from "next/link";
import { Footer, Header } from "components";
export const RegisterPage: FC = () => {
  return (
    <>
      <Header></Header>
      <div className="container">
        <p
          className="text-center mt-5"
          style={{ fontSize: 36, fontWeight: "bolder" }}
        >
          Registration
        </p>
        <div className="row">
          <div className="col-6 tw-p-10">
            <img src="images/starter-hotel.png" alt="starter-hotel" />
          </div>

          <div className="col-6 tw-p-10">
            <p
              className="text-center mt-1"
              style={{ fontSize: 35, fontWeight: "bold" }}
            >
              Sign Up
            </p>
            <form className="mt-2 tw-px-10" action="https://" method="POST">
              <div>
                <label htmlFor="usr">
                  <p style={{ fontSize: 18, fontWeight: "bold" }}> Email </p>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="email"
                  id="usr"
                  name="Email"
                />
              </div>
              <div className="mt-3">
                <label htmlFor="psw">
                  <p style={{ fontSize: 18, fontWeight: "bold" }}>Password</p>
                </label>
                <input
                  type="password"
                  id="psw"
                  className="form-control"
                  placeholder="password"
                  name="Password"
                />
              </div>
              <div className="mt-3">
                <label htmlFor="name">
                  <p style={{ fontSize: 18, fontWeight: "bold" }}>Name</p>
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="name"
                  name="Name"
                />
              </div>
              <div className="mt-3">
                <label htmlFor="surname">
                  <p style={{ fontSize: 18, fontWeight: "bold" }}>Surname</p>
                </label>
                <input
                  type="text"
                  id="psw"
                  className="form-control"
                  placeholder="surname"
                  name="Surname"
                />
              </div>
              <div className="mt-3">
                <label htmlFor="mobphone">
                  <p style={{ fontSize: 18, fontWeight: "bold" }}>
                    Mobile Phone
                  </p>
                </label>
                <input
                  type="tel"
                  id="mobphone"
                  name="Mobphone"
                  placeholder="123-45-678"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  required
                  className="form-control"
                  // name = "phone"
                />
              </div>
              <div className="mt-3">
                <label htmlFor="homephone">
                  <p style={{ fontSize: 18, fontWeight: "bold" }}>Home Phone</p>
                </label>
                <input
                  type="tel"
                  id="homephone"
                  name="Homephone"
                  placeholder="123-45-678"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  required
                  className="form-control"
                />
              </div>
              <div className="mt-3">
                <label htmlFor="address">
                  <p style={{ fontSize: 18, fontWeight: "bold" }}>
                    Home Address
                  </p>
                </label>
                <input
                  type="text"
                  id="address"
                  className="form-control"
                  placeholder="Home Address"
                  name="Address"
                />
              </div>
              <div className="mt-3">
                <p style={{ fontSize: 18, fontWeight: "bold" }}>
                  Identification Type
                </p>
                <select>
                  <option key="passportnum" value="passportnum">
                    Passport
                  </option>
                  <option key="natid" value="natid">
                    National ID
                  </option>
                </select>
              </div>
              <div className="mt-3">
                <label htmlFor="idnum">
                  <p style={{ fontSize: 18, fontWeight: "bold" }}>
                    Identification Number
                  </p>
                </label>
                <input
                  type="tel"
                  id="idnum"
                  name="Idnum"
                  placeholder="123456789"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  required
                  className="form-control"
                />
              </div>
              <div className="mt-5 text-center">
                <button
                  type="submit"
                  className="btn btn-lg btn-outline-primary w-100"
                >
                  Sign Up
                </button>
              </div>
              <input
                type="checkbox"
                name="checkbox"
                value="check"
                id="agree"
                className="mt-3"
                required
              />
              I have read and agree to the Terms and Conditions
            </form>
            <div className="mt-5 text-center">
              <Link href="/login">
                <a
                  style={{
                    fontSize: 15,
                    color: "#0645AD",
                    fontWeight: "bold",
                  }}
                >
                  Already have an account? Sign In
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
