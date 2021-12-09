import React, {FC, useContext} from "react";
import Link from "next/link";
import {Footer, Header, HotelsCarousel, UserContext} from "components";
import axios, {AxiosResponse} from "axios";
import {useForm} from "react-hook-form";

// type AuthUser = {
//   readonly logged: boolean;
//   readonly userName: string;
//   readonly role: string;
//   readonly id: number;
// }

export const LoginPage: FC = () => {
  const { register, handleSubmit } = useForm();
  const [user, setUser] = useContext(UserContext);

  const onSubmit = (data: any) => {
    console.log("data", data);
    if (user.logged) {
      alert("You are already logged in!");
      return;
    }

    axios({
      method: "post",
      url: "http://swe-project-dream-team.herokuapp.com/auth/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        email: data.email,
        name: data.name,
        password: data.password,
        docId: data.docId,
        docNumber: data.docNumber,
        address: data.address,
        homePhone: data.homePhone,
        mobilePhone: data.mobilePhone,
      },
    })
      .then((response: AxiosResponse<any>) => {
        const { data } = response;
        if (data.logged == true) {
          setUser({
            logged: data.logged,
            userName: data.userName,
            role: data.role,
            id: data.id,
          });
          window.alert("Login Successful");
        } else {
          window.alert("Invalid credentials");
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const signOut = async () => {
    await setUser({ logged: false, userName: "null", role: "none" });
    alert("Successfully signed out");
  };

  return (
    <>
      <Header activeTab="Login" />
      <div className="container my-5">
        <p
          className="text-center mt-5"
          style={{ fontSize: 36, fontWeight: "bolder" }}
        >
          Travel With Us
        </p>
        <div className="row">
          <div className="col-6 tw-p-10">
            <HotelsCarousel imageHeight={300} />
          </div>

          <div className="col-6 tw-p-10">
            {user.logged ? (
              <div>
                {" "}
                <p
                  className="text-center mt-1 tw-mb-10"
                  style={{ fontSize: 35, fontWeight: "bold" }}
                >
                  Sign Out
                </p>{" "}
                <button
                  className="btn btn-lg btn-outline-secondary w-100"
                  onClick={signOut}
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)}>
                {" "}
                <p
                  className="text-center mt-1"
                  style={{ fontSize: 35, fontWeight: "bold" }}
                >
                  Sign In
                </p>
                <div className="mt-2 tw-px-10">
                  <div>
                    <label htmlFor="usr">
                      <p style={{ fontSize: 18, fontWeight: "bold" }}>
                        Username{" "}
                      </p>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="email"
                      id="usr"
                      {...register("Email")}
                    />
                  </div>

                  <div className="mt-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <p style={{ fontSize: 18, fontWeight: "bold" }}>
                        Password
                      </p>
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
                      {...register("Password")}
                    />
                  </div>
                  <div className="mt-5 text-center">
                    <button
                      type="submit"
                      className="btn btn-lg btn-outline-success w-100"
                    >
                      Sign In
                    </button>
                  </div>
                </div>
                <div className="mt-5 text-center">
                  <Link href="/register">
                    <a
                      style={{
                        fontSize: 15,
                        color: "#0645AD",
                        fontWeight: "bold",
                      }}
                    >
                      Dont have an account?
                    </a>
                  </Link>
                </div>{" "}
              </form>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
