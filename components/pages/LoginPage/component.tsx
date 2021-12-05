import React, { FC } from "react";
import Link from 'next/link';
import {Footer, Header} from "components";

export const LoginPage: FC = () => {
  return (
      <>
            <Header activeTab="Login" />
          <div className="container">
              <p
                  className="text-center mt-5"
                  style={{ fontSize: 36, fontWeight: "bolder" }}
              >
                  Travel With Us
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
                          Sign In
                      </p>
                      <form className="mt-2 tw-px-10">
                          <div>
                              <label htmlFor="usr">
                                  <p style={{ fontSize: 18, fontWeight: "bold" }}>Username </p>
                              </label>
                              <input
                                  type="text"
                                  className="form-control"
                                  placeholder="email"
                                  id="usr"
                              />
                          </div>

                          <div className="mt-3">
                              <div className="d-flex justify-content-between align-items-center">
                                  <p style={{ fontSize: 18, fontWeight: "bold" }}>Password</p>
                                  <a
                                      style={{
                                          fontSize: 15,
                                          color: "#0645AD",
                                          textDecoration: "underline",
                                      }}
                                  >
                                      Forgot password?
                                  </a>
                              </div>
                              <input
                                  type="password"
                                  id="psw"
                                  className="form-control"
                                  placeholder="password"
                              />
                          </div>
                          <div className="mt-5 text-center">
                              <button className="btn btn-lg btn-outline-success w-100">
                                  Sign In
                              </button>
                          </div>
                      </form>
                      <div className="mt-5 text-center">
                          <Link
                              href="/register"
                          >
                              <a
                                  style={{
                                      fontSize: 15,
                                      color: "#0645AD",
                                      fontWeight: "bold",
                                  }}>
                                  Don't have an account?
                              </a>
                          </Link>
                      </div>
                  </div>
              </div>
          </div>
          <Footer />
      </>
  );
};
