import React, { useState, useCallback } from "react";
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
const ClerkListItem = ({
  BookingID,
  UserName,
  UserID,
  Room,
  Cost,
  BookingEndDate,
  BookingStartDate,
  PeopleCount,
}: Props) => {
  const [showChangeBookingModal, setShowChangeBookingModal] = useState(false);
  const handleCloseChangeBookingModal = () => setShowChangeBookingModal(false);
  const handleShowChangeBookingModal = () => setShowChangeBookingModal(true);

  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const handleCloseConfirmationModal = () => setShowConfirmationModal(false);
  const handleShowConfirmationModal = () => setShowConfirmationModal(true);

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
            onClick={handleShowChangeBookingModal}
          >
            Change Booking
          </button>
          <button
            className="tw-border-gray-900 tw-border-2 tw-rounded-sm tw-text-center tw-w-48 tw-my-10 tw-ml-40 tw-font-extrabold"
            onClick={handleShowConfirmationModal}
          >
            Cancel Booking
          </button>
        </div>
      </div>
      <Modal
        show={showChangeBookingModal}
        onHide={handleCloseChangeBookingModal}
      >
        <Modal.Header closeButton>
          <Modal.Title className="tw-ml-36">Change Booking</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="https://" method="POST">
            <div>
              <div className="tw-inline tw-ml-10">UserID: </div>
              <input
                className="tw-inline tw-border-2 tw-border-gray-800 tw-rounded-lg tw-float-right tw-mr-10"
                type="text"
                name="UserID"
                placeholder={UserID.toString()}
              ></input>
            </div>
            <div className="tw-mt-10">
              <div className="tw-inline tw-ml-10 ">Room: </div>
              <input
                className="tw-inline tw-border-2 tw-border-gray-800 tw-rounded-lg tw-float-right tw-mr-10"
                type="text"
                name="Room"
                placeholder={Room}
              ></input>
            </div>
            <div className="tw-mt-10">
              <div className="tw-inline tw-ml-10 ">People Count: </div>
              <input
                className="tw-inline tw-border-2 tw-border-gray-800 tw-rounded-lg tw-float-right tw-mr-10"
                type="number"
                name="PeopleCount"
                placeholder={PeopleCount.toString()}
              ></input>
            </div>
            <div className="tw-mt-10">
              <div className="tw-inline tw-ml-10 ">Arrival date: </div>
              <input
                className="tw-inline tw-border-2 tw-border-gray-800 tw-rounded-lg tw-float-right tw-mr-10"
                type="date"
                name="BookingStartDate"
                // value={BookingStartDate}
                placeholder={BookingStartDate}
              ></input>
            </div>
            <div className="tw-mt-10">
              <div className="tw-inline tw-ml-10 ">Departure date: </div>
              <input
                className="tw-inline tw-border-2 tw-border-gray-800 tw-rounded-lg tw-float-right tw-mr-10"
                type="date"
                name="BookingEndDate"
                // value={BookingEndDate}
                placeholder={BookingEndDate}
              ></input>
            </div>
            <div className="tw-mt-10">
              <div className="tw-inline tw-ml-10 ">Cost: </div>
              <input
                className="tw-inline tw-border-2 tw-border-gray-800 tw-rounded-lg tw-float-right tw-mr-10"
                type="number"
                name="Cost"
                placeholder={Cost.toString()}
              ></input>
            </div>
            <Button
              type="submit"
              variant="primary"
              className="tw-ml-40 tw-mt-10"
            >
              Commit Changes
            </Button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseChangeBookingModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showConfirmationModal} onHide={handleCloseConfirmationModal}>
        <Modal.Header closeButton>
          <Modal.Title>Booking Cancellation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to cancel the Booking {BookingID}? This action
          cant be undone
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

export default ClerkListItem;
