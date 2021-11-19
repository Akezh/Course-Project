import React, { FC } from "react";
import Link from "next/link";
import { Props } from "./props";

export const Header: FC<Props> = ({ activeTab }: Props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link href="/">
          <p className="navbar-brand" style={{ cursor: "pointer" }}>
            Pandemic.
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item tw-ml-4 tw-mr-6">
              <Link href="/">
                {activeTab === "Home" ? (
                  <p className="nav-link active" style={{ cursor: "pointer" }}>
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
              <Link href="/countries">
                {activeTab === "Countries" ? (
                  <p className="nav-link active" style={{ cursor: "pointer" }}>
                    Countries
                  </p>
                ) : (
                  <p className="nav-link" style={{ cursor: "pointer" }}>
                    Countries
                  </p>
                )}
              </Link>
            </li>
            <li className="nav-item tw-mr-6">
              <Link href="/console">
                {activeTab === "Console" ? (
                  <p className="nav-link active" style={{ cursor: "pointer" }}>
                    Console
                  </p>
                ) : (
                  <p className="nav-link" style={{ cursor: "pointer" }}>
                    Console
                  </p>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
