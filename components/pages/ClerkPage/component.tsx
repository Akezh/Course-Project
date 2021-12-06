import React, { FC, useState } from "react";
import { Header, Footer } from "components";
import ClerkListItem from "../../organisms/ClerkListItem/component";
import { Button, Modal } from "react-bootstrap";
export const ClerkPage: FC = () => {
  let items = [
    {
      BookingID: 123,
      UserName: "Kek",
      UserID: 123121,
      Room: "8.123",
      Cost: 230,
      PeopleCount: 4,
      BookingStartDate: "2020-08-21",
      BookingEndDate: "2020-09-14",
    },
    {
      BookingID: 124,
      UserName: "cheburek",
      UserID: 123122131,
      Room: "8.323",
      Cost: 321,
      PeopleCount: 5,
      BookingStartDate: "2020-08-11",
      BookingEndDate: "2020-08-14",
    },
    {
      BookingID: 125,
      UserName: "lolKek",
      UserID: 123121,
      Room: "8.123",
      Cost: 723,
      PeopleCount: 2,
      BookingStartDate: "2020-04-23",
      BookingEndDate: "2020-06-12",
    },
  ];

  const [showCreateNewBookingModal, setShowCreateNewBookingModal] =
    useState(false);
  const handleCloseCreateNewBookingModal = () =>
    setShowCreateNewBookingModal(false);
  const handleShowCreateNewBookingModal = () =>
    setShowCreateNewBookingModal(true);
  return (
    <React.Fragment>
      <Header activeTab="Clerk Console" />
      <div className="container tw-my-10">
        <p className="text-center text-black tw-font-bold tw-text-3xl tw-mb-10">
          Desk Clerk Console
        </p>
        <button
          className="tw-border-gray-900 tw-border-2 tw-rounded-lg tw-w-52 tw-ml-64 tw-inline-block tw-text-center"
          onClick={handleShowCreateNewBookingModal}
        >
          Create New Booking{" "}
          <span className="tw-pl-4 tw-font-extrabold tw-text-xl"> + </span>
        </button>
        <div className="tw-border-gray-900 tw-border-2 tw-rounded-lg tw-w-52 tw-mr-64 tw-inline-block tw-float-right tw-text-center">
          Current Hotel:
        </div>
        <div className="tw-w-3/5 tw-m-auto tw-mt-10">
          {items.map((item, index) => (
            <ClerkListItem
              BookingID={item.BookingID}
              UserName={item.UserName}
              UserID={item.UserID}
              Room={item.Room}
              Cost={item.Cost}
              key={index}
              BookingStartDate={item.BookingStartDate}
              BookingEndDate={item.BookingEndDate}
              PeopleCount={item.PeopleCount}
            />
          ))}
        </div>
      </div>
      <Footer />
      <Modal
        show={showCreateNewBookingModal}
        onHide={handleCloseCreateNewBookingModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>Create New Booking</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="https://" method="POST">
            <div>
              <div className="tw-ml-10">User ID:</div>
              <input
                className="tw-border-2 tw-ml-10 tw-rounded-sm tw-my-2 tw-w-96"
                placeholder="Enter user ID"
                type="number"
                name="UserID"
              ></input>
            </div>
            <div className="row tw-ml-7">
              <div className="col-6">
                <div className="">Room: </div>
                <input
                  className="tw-border-2 tw-rounded-sm tw-my-2 tw-w-40"
                  placeholder="Enter Room No"
                  type="number"
                  name="Room"
                ></input>
              </div>
              <div className="col-6">
                <div>People Count: </div>
                <input
                  className="tw-border-2 tw-rounded-sm tw-my-2 tw-w-40"
                  placeholder="Enter People Count"
                  type="number"
                  name="PeopleCount"
                ></input>
              </div>
            </div>
            <div className="tw-ml-10 tw-my-3">
              <div>
                <div className="tw-inline"> Arrival date: </div>
                <input
                  className="tw-inline tw-float-right tw-mr-6"
                  type="date"
                  name="BookingStartDate"
                ></input>
              </div>
            </div>
            <div className="tw-ml-10 tw-my-3">
              <div>
                <div className="tw-inline"> Departure date: </div>
                <input
                  className="tw-inline tw-float-right tw-mr-6"
                  type="date"
                  name="BookingEndDate"
                ></input>
              </div>
            </div>
            <Button
              type="submit"
              variant="primary"
              className="tw-w-28 tw-ml-44"
            >
              Submit
            </Button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleCloseCreateNewBookingModal}
          >
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseCreateNewBookingModal}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};
