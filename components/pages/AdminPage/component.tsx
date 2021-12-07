import React, { FC, useContext, useEffect, useMemo } from "react";
import { Footer, Header, UserContext } from "components";
import { avatarService } from "static/avatarService";
import { Employee } from "./libs";

export const AdminPage: FC = () => {
  const [user, setUser] = useContext(UserContext);

  useEffect(() => {
    // const auth = {
    //   logged: true,
    //   userName: "john",
    //   role: "admin",
    //   id: 1,
    // };
    // setUser(auth);
  });

  const schedule = useMemo(
    () => [
      "9 AM - 6 PM",
      "9 AM - 6 PM",
      "9 AM - 6 PM",
      "9 AM - 6 PM",
      "9 AM - 6 PM",
      "9 AM - 6 PM",
    ],
    []
  );

  return (
    <React.Fragment>
      <Header activeTab="Admin" />
      {user.logged && user.role === "admin" ? (
        <>
          <div className="container my-5">
            <p className="text-center text-black tw-font-bold tw-text-3xl">
              Employee management console
            </p>

            <Employee
              fullName="John Sena, 29 y.o."
              role="Desk Clerk"
              avatarImg={avatarService["1"]}
              salary="3.500$ ,"
              salaryTransferDate="last transfer at 16 November 2021"
              workingHours="48 hours / week"
              schedule={schedule}
            />

            <Employee
              fullName="John Sena, 29 y.o."
              role="Desk Clerk"
              avatarImg={avatarService["1"]}
              salary="3.500$ ,"
              salaryTransferDate="last transfer at 16 November 2021"
              workingHours="48 hours / week"
              schedule={schedule}
            />

            <Employee
              fullName="John Sena, 29 y.o."
              role="Desk Clerk"
              avatarImg={avatarService["1"]}
              salary="3.500$ ,"
              salaryTransferDate="last transfer at 16 November 2021"
              workingHours="48 hours / week"
              schedule={schedule}
            />
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
