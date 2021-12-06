import React, { FC, useContext } from "react";
import Link from "next/link";
import { Props } from "./props";
import { UserContext } from "components";
export const Header: FC<Props> = ({ activeTab }: Props) => {
  // interface localStore {
  //   logged?: boolean;
  //   userName?: string;
  //   role?: string;
  // }
  // const [state, setstate] = useState<localStore>();
  // useEffect(() => {
  //   if (window !== undefined) {
  //     if (window.localStorage !== undefined) {
  //       let kek: localStore = {
  //         logged: localStorage.getItem("logged"),
  //       };
  //     }
  //   }
  // }, []);
  const [user, setUser] = useContext(UserContext);
  let signout = () => {
    setUser({ logged: false, userName: "null", role: "none" });
    alert("Signed out successfully");
  };
  return (
    <div className="container tw-py-4">
      <nav className="navbar navbar-expand-lg navbar-light light">
        <div className="container-fluid">
          <Link href="/">
            <p className="navbar-brand" style={{ cursor: "pointer" }}>
              Hotel Management
            </p>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="d-flex">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item tw-ml-4 tw-mr-6">
                <Link href="/">
                  {activeTab === "Home" ? (
                    <p
                      className="nav-link active"
                      style={{ cursor: "pointer" }}
                    >
                      Home
                    </p>
                  ) : (
                    <p className="nav-link" style={{ cursor: "pointer" }}>
                      Home
                    </p>
                  )}
                </Link>
              </li>
              <li className="nav-item tw-mr-6">
                <Link href="/search">
                  {activeTab === "Search" ? (
                    <p
                      className="nav-link active"
                      style={{ cursor: "pointer" }}
                    >
                      Search
                    </p>
                  ) : (
                    <p className="nav-link" style={{ cursor: "pointer" }}>
                      Search
                    </p>
                  )}
                </Link>
              </li>
              <li className="nav-item tw-mr-6">
                <Link href="/admin">
                  {activeTab === "Admin" ? (
                    <p
                      className="nav-link active"
                      style={{ cursor: "pointer" }}
                    >
                      Admin console
                    </p>
                  ) : (
                    <p className="nav-link" style={{ cursor: "pointer" }}>
                      Admin console
                    </p>
                  )}
                </Link>
              </li>
              <li className="nav-item tw-mr-6">
                <Link href="/clerk">
                  {activeTab === "Clerk" ? (
                    <p
                      className="nav-link active"
                      style={{ cursor: "pointer" }}
                    >
                      Clerk Console
                    </p>
                  ) : (
                    <p className="nav-link" style={{ cursor: "pointer" }}>
                      Clerk Console
                    </p>
                  )}
                </Link>
              </li>
              <li className="nav-item tw-mr-6">
                <Link href="/about">
                  {activeTab === "About" ? (
                    <p
                      className="nav-link active"
                      style={{ cursor: "pointer" }}
                    >
                      About
                    </p>
                  ) : (
                    <p className="nav-link" style={{ cursor: "pointer" }}>
                      About
                    </p>
                  )}
                </Link>
              </li>
              <li className="nav-item">
                {user.logged ? (
                  <>
                    <p
                      className="nav-link tw-inline"
                      style={{ cursor: "pointer" }}
                    >
                      Welcome, {user.userName}
                    </p>
                    <button
                      className="btn btn-outline-dark tw-inline tw-ml-4"
                      type="submit"
                      onClick={signout}
                    >
                      Sign Out
                    </button>
                  </>
                ) : (
                  <Link href="/login">
                    <button className="btn btn-outline-dark" type="submit">
                      Login
                    </button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
