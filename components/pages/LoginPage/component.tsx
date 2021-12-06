import React, { FC, useState, useContext } from "react";
import Link from "next/link";
import { Footer, Header } from "components";
import { UserContext } from "components";
export const LoginPage: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useContext(UserContext);

  let submit = async () => {
    console.log(email, password);
    if (user.logged) {
      alert("You are already logged in!");
      return;
    }
    let data = {
      Email: email,
      Password: password,
    };
    let fetchParams = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    // let response = await fetch("https://", fetchParams);
    // let responseJSON = await response.json();
    let responseJSON = {
      logged: true,
      userName: "SWE_Dream_Team",
      role: "admin",
      id: 228,
    };
    console.log(responseJSON);
    if (responseJSON.logged == true) {
      setUser({
        logged: responseJSON.logged,
        userName: responseJSON.userName,
        role: responseJSON.role,
        id: responseJSON.id,
      });
      window.alert("Login Successful");
    } else {
      window.alert("Invalid credentials");
    }
  };
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
            <div className="mt-2 tw-px-10">
              <div>
                <label htmlFor="usr">
                  <p style={{ fontSize: 18, fontWeight: "bold" }}>Username </p>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="email"
                  id="usr"
                  onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mt-5 text-center">
                <button
                  className="btn btn-lg btn-outline-success w-100"
                  onClick={submit}
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
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
