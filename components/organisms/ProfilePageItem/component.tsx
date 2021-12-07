import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
interface Props {
  BookingID: number;
  UserName: string;
  UserID: number;
  Room: string;
  Cost: number;
  BookingStartDate: string;
  BookingEndDate: string;
  PeopleCount: number;
}
const ProfilePageItem = ({
  BookingID,
  UserName,
  UserID,
  Room,
  Cost,
  BookingEndDate,
  BookingStartDate,
  PeopleCount,
}: Props) => {
  interface clerkInfo {
    Email?: string;
    UserName?: string;
    phone?: number;
  }
  const [clerks, setClerks] = useState<Array<clerkInfo>>([]);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const handleCloseConfirmationModal = () => {
    setShowConfirmationModal(false);
  };
  const handleShowConfirmationModal = () => {
    // let response = await fetch("https://", fetchParams);
    // let responseJSON = await response.json();
    let responseJSON: clerkInfo[] = [
      {
        Email: "clerk1@dsadsa",
        UserName: "John Psina",
        phone: 321312,
      },
      {
        Email: "clerk2@dsadsa",
        UserName: "Joe Psina",
        phone: 332132,
      },
      {
        Email: "clerk3@dsadsa",
        UserName: "Jeff Psina",
        phone: 3532432,
      },
    ];
    setClerks(responseJSON);
    setShowConfirmationModal(true);
  };
  return (
    <>
      <div className="tw-w-128 tw-border-gray-900 tw-border-2 tw-rounded-lg tw-my-10 row">
        <div className="col-6">
          <div>
            <div className="tw-mt-5 tw-ml-4">BookingID: {BookingID}</div>
            <div className="tw-ml-4">
              User: {UserName} {UserID}
            </div>
            <div className="tw-ml-4">Room: {Room}</div>
            <div className="tw-ml-4">Cost: {Cost}</div>
            <div className="tw-ml-4">People: {PeopleCount}</div>

            <div className="tw-ml-4">
              Booking Start Date: {BookingStartDate}
            </div>
            <div className="tw-mb-5 tw-ml-4">
              Booking End Date: {BookingEndDate}
            </div>
          </div>
        </div>
        <div className="col-6">
          <button
            className="tw-border-gray-900 tw-border-2 tw-rounded-sm tw-text-center tw-w-48 tw-mt-10 tw-ml-40 tw-font-extrabold"
            onClick={handleShowConfirmationModal}
          >
            Change Booking
          </button>
          <button
            className="tw-border-gray-900 tw-border-2 tw-rounded-sm tw-text-center tw-w-48 tw-mt-10 tw-ml-40 tw-font-extrabold"
            onClick={handleShowConfirmationModal}
          >
            Cancel Booking
          </button>
        </div>
      </div>
      <Modal show={showConfirmationModal} onHide={handleCloseConfirmationModal}>
        <Modal.Header closeButton>
          <Modal.Title>Booking Modification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="tw-font-bold tw-text-xl">
            Please contact our clerks to make changes to your bookings:
          </div>
          {clerks.map((item, index) => (
            <div key={index}>
              <div className="tw-mt-2 "> Name: {item.UserName} </div>
              <div> Email: {item.Email} </div>
              <div className="tw-mb-2"> Phone: {item.phone} </div>
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseConfirmationModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseConfirmationModal}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProfilePageItem;
