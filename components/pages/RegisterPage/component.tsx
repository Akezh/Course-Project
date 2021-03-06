import React, { FC, useState } from "react";
import Link from "next/link";
import { Footer, Header } from "components";
import axios from "axios";
import { ServerResponse } from "./props";
import { useForm } from "react-hook-form";

type RegisterPayloadType = {
  readonly email: string;
  readonly name: string;
  readonly password: string;
  readonly docId: number;
  readonly docNumber: string;
  readonly address: string;
  readonly mobilePhone: string;
  readonly homePhone: string;
};

export const RegisterPage: FC = () => {
  const { register, handleSubmit } = useForm();
  const [serverResponse, setServerResponse] =
    useState<ServerResponse>(undefined);

  const onSubmit = (data: RegisterPayloadType) => {
    axios({
      method: "post",
      url: "http://swe-project-dream-team.herokuapp.com/auth/register",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      data: {
        ...data,
        docId: Number(data.docId),
      },
    })
      .then((response) => {
        setServerResponse(response.data);
        console.log("response", response);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

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
          <div className="col-6 tw-p-10 d-flex justify-content-center align-items-center">
            <img
              src="images/dubai.png"
              style={{
                borderRadius: 6,
                filter: "drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.35))",
              }}
              alt="starter-hotel"
            />
          </div>

          <div className="col-6 tw-p-10">
            <p
              className="text-center mt-1"
              style={{ fontSize: 35, fontWeight: "bold" }}
            >
              Sign Up
            </p>
            <form className="mt-2 tw-px-10" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="usr">
                  <p style={{ fontSize: 18, fontWeight: "bold" }}> Email </p>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="email"
                  id="usr"
                  aria-required
                  {...register("email")}
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
                  required
                  {...register("password")}
                />
              </div>
              <div className="mt-3">
                <label htmlFor="name">
                  <p style={{ fontSize: 18, fontWeight: "bold" }}>Full Name</p>
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Full name"
                  {...register("name")}
                  required
                />
              </div>
              <div className="mt-3">
                <label htmlFor="mobphone">
                  <p style={{ fontSize: 18, fontWeight: "bold" }}>
                    Mobile Phone
                  </p>
                </label>
                <input
                  type="text"
                  id="mobphone"
                  placeholder="123-45-678"
                  // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  required
                  className="form-control"
                  {...register("mobilePhone")}
                />
              </div>
              <div className="mt-3">
                <label htmlFor="homephone">
                  <p style={{ fontSize: 18, fontWeight: "bold" }}>Home Phone</p>
                </label>
                <input
                  type="text"
                  id="homephone"
                  placeholder="123-45-678"
                  // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  required
                  className="form-control"
                  {...register("homePhone")}
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
                  required
                  {...register("address")}
                />
              </div>
              <div className="mt-3">
                <p style={{ fontSize: 18, fontWeight: "bold" }}>
                  Passport - 1 \ National ID - 2
                </p>
                <input
                  type="text"
                  className="form-control"
                  placeholder="ID"
                  {...register("docNumber")}
                ></input>
              </div>
              <div className="mt-3">
                <label htmlFor="idnum">
                  <p style={{ fontSize: 18, fontWeight: "bold" }}>
                    Identification Number
                  </p>
                </label>
                <input
                  type="number"
                  id="idnum"
                  placeholder="123456789"
                  required
                  className="form-control"
                  {...register("docId")}
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
                className="mt-3 tw-mr-3"
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
