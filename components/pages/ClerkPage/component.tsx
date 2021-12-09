import React, { FC, useState, useCallback, useContext, useEffect } from "react";
import { Header, Footer } from "components";
import ClerkListItem from "../../organisms/ClerkListItem/component";
import { Button, Modal, Dropdown } from "react-bootstrap";
import { UserContext } from "components";
import axios, { AxiosResponse } from "axios";
export const ClerkPage: FC = () => {
  // interface booking {
  //   bookingID: number;
  //   guestName: string;
  //   guestID: number;
  //   rooms: any[];
  //   cost: number;
  //   peopleCount: number;
  //   bookingStartDate: string;
  //   bookingEndDate: string;
  // }

  const [bookings, setBookings] = useState<Array<any>>([]);
  const [hotel, setHotel] = useState<string>("");
  const [hotelID, setHotelID] = useState<string>("");
  // const [hotelID, setHotelID] = useState<string>("");

  useEffect(() => {
    axios({
      method: "post",
      url: "https://swe-project-dream-team.herokuapp.com/deskclerk/bookings/get",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      data: {
        id: user.id,
      },
    })
      .then((response: AxiosResponse<any>) => {
        const { data } = response;
        console.log("clerk bookings", data);
        setBookings(data.bookings);
        const onHandleDeleteClick = useCallback(
          (id: number) => () => {
            axios
              .delete(
                "https://swe-project-dream-team.herokuapp.com/deskclerk/bookings/cancel",
                {
                  headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                  },
                  data: {
                    id: id,
                  },
                }
              )
              .then(() => {
                console.log("DELETED BOOKING");
              });
          },
          []
        );
      })
      .catch((error) => {
        console.log("error", error);
      });

    axios({
      method: "post",
      url: "https://swe-project-dream-team.herokuapp.com/deskclerk/bookings/getInfo",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      data: {
        id: user.id,
      },
    })
      .then((response: AxiosResponse<any>) => {
        const { data } = response;
        console.log(data);

        setHotel(data.hotelName);
        setHotelID(data.hotelID);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  const [showCreateNewBookingModal, setShowCreateNewBookingModal] =
    useState(false);
  const handleCloseCreateNewBookingModal = () =>
    setShowCreateNewBookingModal(false);

  const [availableRooms, setAvailableRooms] = useState<Array<string>>([]);
  const handleShowCreateNewBookingModal = () => {
    axios({
      method: "post",
      url: "https://swe-project-dream-team.herokuapp.com/deskclerk/bookings/getRooms",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      data: {
        id: hotelID,
      },
    })
      .then((response: AxiosResponse<any>) => {
        const { data } = response;
        console.log(data);

        // setPrevHotels(data);
        setAvailableRooms(data);
      })
      .catch((error) => {
        console.log("error", error);
      });

    // let responseJSON: string[] = ["1.21", "1.23", "1.24", "2.28", "2.29"];
    // setAvailableRooms(responseJSON);

    setShowCreateNewBookingModal(true);
  };
  const [user, setUser] = useContext(UserContext);

  return (
    <React.Fragment>
      {user.logged && user.role === "clerk" ? (
        <>
          <Header activeTab="Clerk" />
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
              Current Hotel: {hotel}
            </div>
            <div className="tw-w-3/5 tw-m-auto tw-mt-10">
              {bookings.map((item, index) => (
                <ClerkListItem
                  BookingID={item.bookingID}
                  UserName={item.guestName}
                  UserID={item.guestID}
                  Room={item.room}
                  Cost={item.cost}
                  key={index}
                  BookingStartDate={item.bookingStartDate}
                  BookingEndDate={item.bookingEndDate}
                  PeopleCount={item.peopleCount}
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
                  <div className="tw-ml-10">Hotel ID:</div>
                  <input
                    className="tw-border-2 tw-ml-10 tw-rounded-sm tw-my-2 tw-w-96"
                    placeholder=""
                    type="number"
                    name="HotelID"
                    value={hotelID}
                  ></input>
                </div>
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
                      type="text"
                      name="Room"
                    ></input>
                    <div>People Count: </div>
                    <input
                      className="tw-border-2 tw-rounded-sm tw-my-2 tw-w-40"
                      placeholder="Enter People Count"
                      type="number"
                      name="PeopleCount"
                    ></input>
                  </div>
                  <div className="col-6">
                    <Dropdown>
                      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        Available Rooms
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        {availableRooms.map((item, ind) => (
                          <Dropdown.Item key={ind}>
                            <input
                              type="radio"
                              name="room"
                              value={item}
                            ></input>
                            <label>{item}</label>
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
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
                  // onClick={}
                >
                  Submit
                </Button>
              </form>
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
          </Modal>
        </>
      ) : (
        <>
          <Header activeTab="Clerk" />
          <h1 className="tw-text-center tw-text-4xl tw-my-20">
            You dont have permission to view this page
          </h1>
          <Footer />
        </>
      )}
    </React.Fragment>
  );
};
