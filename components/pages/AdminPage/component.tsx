import React, { FC, useContext } from "react";
import { Header, Footer } from "components";
import { UserContext } from "components";
export const AdminPage: FC = () => {
  const [user, setUser] = useContext(UserContext);

  return (
    <React.Fragment>
      <Header activeTab="Admin" />
      {user.logged && user.role === "admin" ? (
        <>
          <div className="container my-5">
            <p className="text-center text-black tw-font-bold tw-text-3xl">
              Employee management console
            </p>
            <div className="col-6 mt-5">
              <p className="text-black tw-text-xl my-2">Name: John Sena</p>
              <div className="d-flex justify-content-between align-items-center">
                <p className="text-black tw-text-xl my-2">
                  Salary: 3.500$, last transfer at 16 November 2021
                </p>
                <button className="btn btn-outline-dark">Send payroll</button>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="text-black tw-text-xl my-2">
                  Hours: 48 hours / week
                </p>
                <button className="btn btn-outline-dark">Adjust hours</button>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-2">
                <p className="text-black tw-text-xl tw-ml-6">Monday</p>
              </div>
              <div className="col-2">
                <p className="text-black tw-text-xl">Tuesday</p>
              </div>
              <div className="col-2">
                <p className="text-black tw-text-xl">Wednesday</p>
              </div>
              <div className="col-2">
                <p className="text-black tw-text-xl">Thursday</p>
              </div>
              <div className="col-2">
                <p className="text-black tw-text-xl">Friday</p>
              </div>
              <div className="col-2">
                <p className="text-black tw-text-xl">Saturday</p>
              </div>
            </div>
            <div
              className="mt-2 py-2"
              style={{ borderRadius: 12, backgroundColor: "#A4FB96" }}
            >
              <div className="row">
                <div className="col-2">
                  <p className="text-black tw-text-lg tw-ml-6">9 AM - 6 PM</p>
                </div>
                <div className="col-2">
                  <p className="text-black tw-text-lg">9 AM - 6 PM</p>
                </div>
                <div className="col-2">
                  <p className="text-black tw-text-lg">9 AM - 6 PM</p>
                </div>
                <div className="col-2">
                  <p className="text-black tw-text-lg">9 AM - 6 PM</p>
                </div>
                <div className="col-2">
                  <p className="text-black tw-text-lg">9 AM - 6 PM</p>
                </div>
                <div className="col-2">
                  <p className="text-black tw-text-lg">9 AM - 6 PM</p>
                </div>
              </div>
            </div>

            <div className="col-6 mt-5">
              <p className="text-black tw-text-xl my-2">Name: John Sena</p>
              <div className="d-flex justify-content-between align-items-center">
                <p className="text-black tw-text-xl my-2">
                  Salary: 3.500$, last transfer at 16 November 2021
                </p>
                <button className="btn btn-outline-dark">Send payroll</button>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="text-black tw-text-xl my-2">
                  Hours: 48 hours / week
                </p>
                <button className="btn btn-outline-dark">Adjust hours</button>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-2">
                <p className="text-black tw-text-xl tw-ml-6">Monday</p>
              </div>
              <div className="col-2">
                <p className="text-black tw-text-xl">Tuesday</p>
              </div>
              <div className="col-2">
                <p className="text-black tw-text-xl">Wednesday</p>
              </div>
              <div className="col-2">
                <p className="text-black tw-text-xl">Thursday</p>
              </div>
              <div className="col-2">
                <p className="text-black tw-text-xl">Friday</p>
              </div>
              <div className="col-2">
                <p className="text-black tw-text-xl">Saturday</p>
              </div>
            </div>
            <div
              className="mt-2 py-2"
              style={{ borderRadius: 12, backgroundColor: "#A4FB96" }}
            >
              <div className="row">
                <div className="col-2">
                  <p className="text-black tw-text-lg tw-ml-6">9 AM - 6 PM</p>
                </div>
                <div className="col-2">
                  <p className="text-black tw-text-lg">9 AM - 6 PM</p>
                </div>
                <div className="col-2">
                  <p className="text-black tw-text-lg">9 AM - 6 PM</p>
                </div>
                <div className="col-2">
                  <p className="text-black tw-text-lg">9 AM - 6 PM</p>
                </div>
                <div className="col-2">
                  <p className="text-black tw-text-lg">9 AM - 6 PM</p>
                </div>
                <div className="col-2">
                  <p className="text-black tw-text-lg">9 AM - 6 PM</p>
                </div>
              </div>
            </div>

            <div className="col-6 mt-5">
              <p className="text-black tw-text-xl my-2">Name: John Sena</p>
              <div className="d-flex justify-content-between align-items-center">
                <p className="text-black tw-text-xl my-2">
                  Salary: 3.500$, last transfer at 16 November 2021
                </p>
                <button className="btn btn-outline-dark">Send payroll</button>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="text-black tw-text-xl my-2">
                  Hours: 48 hours / week
                </p>
                <button className="btn btn-outline-dark">Adjust hours</button>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-2">
                <p className="text-black tw-text-xl tw-ml-6">Monday</p>
              </div>
              <div className="col-2">
                <p className="text-black tw-text-xl">Tuesday</p>
              </div>
              <div className="col-2">
                <p className="text-black tw-text-xl">Wednesday</p>
              </div>
              <div className="col-2">
                <p className="text-black tw-text-xl">Thursday</p>
              </div>
              <div className="col-2">
                <p className="text-black tw-text-xl">Friday</p>
              </div>
              <div className="col-2">
                <p className="text-black tw-text-xl">Saturday</p>
              </div>
            </div>
            <div
              className="mt-2 py-2"
              style={{ borderRadius: 12, backgroundColor: "#A4FB96" }}
            >
              <div className="row">
                <div className="col-2">
                  <p className="text-black tw-text-lg tw-ml-6">9 AM - 6 PM</p>
                </div>
                <div className="col-2">
                  <p className="text-black tw-text-lg">9 AM - 6 PM</p>
                </div>
                <div className="col-2">
                  <p className="text-black tw-text-lg">9 AM - 6 PM</p>
                </div>
                <div className="col-2">
                  <p className="text-black tw-text-lg">9 AM - 6 PM</p>
                </div>
                <div className="col-2">
                  <p className="text-black tw-text-lg">9 AM - 6 PM</p>
                </div>
                <div className="col-2">
                  <p className="text-black tw-text-lg">9 AM - 6 PM</p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <h1 className="tw-text-center tw-text-4xl tw-my-20">
          You dont have permission to view this page
        </h1>
      )}
      <Footer />
    </React.Fragment>
  );
};
